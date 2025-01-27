'use client';

// import { useParams } from 'next/navigation';
import Card from '@/components/ui/Card';
import Divider from '@/components/ui/Divider';
import { DropDownOption } from '@/components/ui/FormDropdown';
import { useEffect, useState } from 'react';

import { VerificationMethods } from '@/constants/verificationConstants';
import { IBuildStructure } from '@/common/interfaces/ISolc';
import { fetchData, fetchDataExt } from '@/services/api';
import { ROUTER } from '@/common/constants';
import FormInputField from '@/components/ui/FormInputField';
import GeneralDetailsSection from '@/components/verify/GeneralDetailsSection';
import AdvancedDetailsSection from '@/components/verify/AdvancedDetailsSection';
import ConstructorArgumentsSection from '@/components/verify/ConstructorArgumentsSection';

export default function Page() {
  // const hash = useParams();
  const [isNightly, setIsNightly] = useState(false);
  const [optimizationOn, setOptimizationOn] = useState(false);
  const [abiEncoded, setAbiEncoded] = useState(false);
  const [contractName, setContractName] = useState<string>('');
  const [optimizationValue, setOptimizationValue] = useState<string>('');
  const [constructorArgs, setConstructorArgs] = useState<string>('');
  const [filteredCompilers, setFilteredCompilers] = useState<DropDownOption[]>(
    []
  );
  const [availableEvmVersions, setAvailableEvmVersions] = useState<
    DropDownOption[]
  >([]);
  const [verifMethod, setVerifMethod] = useState<DropDownOption>(
    VerificationMethods[0]
  );
  const [compilerVersion, setCompilerVersion] = useState<
    DropDownOption | undefined
  >(undefined);
  const [evmVersion, setEVMVersion] = useState<DropDownOption | undefined>(
    undefined
  );
  const [solcVersions, setSolcVersions] = useState<IBuildStructure | undefined>(
    undefined
  );
  useEffect(() => {
    fetchSolcVersions();
    fetchEVMVersions();
  }, []);

  const fetchSolcVersions = async (): Promise<IBuildStructure | undefined> => {
    try {
      const response = await fetchDataExt<IBuildStructure>(
        `${ROUTER.VERIFY.GET_SOLC}`
      );
      const data = response;
      if (response) {
        setSolcVersions(data as IBuildStructure);
      }
    } catch (error) {
      console.log('error', error);
      return undefined;
    }
  };
  const fetchEVMVersions = async (): Promise<string[] | undefined> => {
    try {
      const response = await fetchData<string[]>(`${ROUTER.VERIFY.GET_EVM}`);
      const data = response as unknown as string[];
      const formatedData = data.map((item) => ({ key: item, title: item }));
      setEVMVersion(formatedData[0]);
      setAvailableEvmVersions(formatedData);
    } catch (error) {
      console.log('error', error);
      return undefined;
    }
  };
  useEffect(() => {
    if (solcVersions?.releases) {
      if (isNightly) {
        const sortedBuilds = [...solcVersions.builds].sort((a, b) => {
          const parseVersion = (version: string) =>
            version.split('.').map(Number);

          const [majorA, minorA, patchA] = parseVersion(a.version);
          const [majorB, minorB, patchB] = parseVersion(b.version);

          if (majorA !== majorB) return majorB - majorA;
          if (minorA !== minorB) return minorB - minorA;
          return (patchB || 0) - (patchA || 0);
        });

        const filteredCompilers = sortedBuilds.map((build, index) => ({
          key: `${build.version}-${build.build}${index}`,
          title: `${build.version}-${build.build}`,
        }));
        setFilteredCompilers(filteredCompilers);
        setCompilerVersion(filteredCompilers[0]);
        return;
      }
      const limitVersion = process.env.NEXT_PUBLIC_LTS_SOL_VERSION || '0.8.24';
      const filteredCompilers = filterReleasesByVersion(
        solcVersions?.releases,
        limitVersion
      );
      setFilteredCompilers(filteredCompilers);
      setCompilerVersion(filteredCompilers[0]);
    }
  }, [solcVersions, isNightly]);
  const filterReleasesByVersion = (
    releases: { [key: string]: string },
    versionLimit: string
  ): DropDownOption[] => {
    const isVersionLessThan = (v1: string, v2: string): boolean => {
      const [major1, minor1, patch1] = v1.split('.').map(Number);
      const [major2, minor2, patch2] = v2.split('.').map(Number);

      if (major1 !== major2) return major1 < major2;
      if (minor1 !== minor2) return minor1 < minor2;
      return (patch1 || 0) < (patch2 || 0);
    };

    return Object.entries(releases)
      .filter(([version]) => isVersionLessThan(version, versionLimit))
      .map(([key]) => ({ key, title: key }));
  };

  const handleFileDrop = (files: File[]) => {
    console.log('loaded files:', files);
  };

  return (
    <div className="mt-10 p-6 items-center flex flex-col">
      <div className="p-4 rounded-lg w-4/5">
        <Card className="bg-secondary flex flex-col">
          <GeneralDetailsSection
            handleFileDrop={handleFileDrop}
            isNightly={isNightly}
            setIsNightly={setIsNightly}
            contractName={contractName}
            setContractName={setContractName}
            filteredCompilers={filteredCompilers}
            verifMethod={verifMethod}
            setVerifMethod={setVerifMethod}
            compilerVersion={compilerVersion}
            setCompilerVersion={setCompilerVersion}
          />
          <AdvancedDetailsSection
            optimizationOn={optimizationOn}
            setOptimizationOn={setOptimizationOn}
            optimizationValue={optimizationValue}
            setOptimizationValue={setOptimizationValue}
            availableEvmVersions={availableEvmVersions}
            evmVersion={evmVersion}
            setEVMVersion={setEVMVersion}
          />
          <ConstructorArgumentsSection
            constructorArgs={constructorArgs}
            setConstructorArgs={setConstructorArgs}
            abiEncoded={abiEncoded}
            setAbiEncoded={setAbiEncoded}
          />
          <div className="text-lg text-white-400 text-lg mt-4">
            Contract Libraries
          </div>
          <Divider />
          <div className="flex items-center gap-4 mt-4">
            <div className="w-1/3">
              <FormInputField
                title="Library Name"
                placeholder="0x..."
                value={constructorArgs}
                setValue={setConstructorArgs}
                maxLength={100}
              />
            </div>
            <div className="flex-1">
              <FormInputField
                title="Library Contract Address"
                placeholder="Name"
                value={contractName}
                setValue={setContractName}
                maxLength={50}
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
