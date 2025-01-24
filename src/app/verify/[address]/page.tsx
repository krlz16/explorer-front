"use client";

import { useParams } from "next/navigation";
import Card from "@/components/ui/Card";
import Divider from "@/components/ui/Divider";
import FormDropdownComponent, {
  DropDownOption,
} from "@/components/ui/FormDropdown";
import { useEffect, useState } from "react";

import { VerificationMethods } from "@/constants/verificationConstants";
import { IBuildStructure } from "@/common/interfaces/ISolc";
import { fetchData, fetchDataExt } from "@/services/api";
import { ROUTER } from "@/common/constants";
import FormInputField from "@/components/ui/FormInputField";
import FormUploadFile from "@/components/ui/FormUploadFile";

export default function Page() {
  const hash = useParams();
  const [isNightly, setIsNightly] = useState(false);
  const [optimizationOn, setOptimizationOn] = useState(false);
  const [contractName, setContractName] = useState<string>("");
  const [optimizationValue, setOptimizationValue] = useState<string>("");
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
      return undefined;
    }
  };
  useEffect(() => {
    if (solcVersions?.releases) {
      if (isNightly) {
        const sortedBuilds = [...solcVersions.builds].sort((a, b) => {
          const parseVersion = (version: string) =>
            version.split(".").map(Number);

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
      const limitVersion = process.env.NEXT_PUBLIC_LTS_SOL_VERSION || "0.8.24";
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
      const [major1, minor1, patch1] = v1.split(".").map(Number);
      const [major2, minor2, patch2] = v2.split(".").map(Number);

      if (major1 !== major2) return major1 < major2;
      if (minor1 !== minor2) return minor1 < minor2;
      return (patch1 || 0) < (patch2 || 0);
    };

    return Object.entries(releases)
      .filter(([version]) => isVersionLessThan(version, versionLimit))
      .map(([key, value]) => ({ key, title: key }));
  };

  const handleFileDrop = (files: File[]) => {
    console.log("loaded files:", files);
  };

  return (
    <div className="mt-10 p-6 items-center flex flex-col">
      <div className="p-4 rounded-lg w-4/5">
        <Card className="bg-secondary flex flex-col">
          <div className="text-lg text-white-400 text-lg">General Details</div>
          <Divider />
          <FormDropdownComponent
            title="Verification Method"
            selectedOption={verifMethod}
            setSelectedOption={setVerifMethod}
            elements={VerificationMethods}
          />
          {compilerVersion && (
            <FormDropdownComponent
              title="Compiler Version"
              selectedOption={compilerVersion}
              setSelectedOption={setCompilerVersion}
              elements={filteredCompilers}
              toggleLabel="Include night builds"
              isToggleOn={isNightly}
              setIsToggleOn={setIsNightly}
            />
          )}
          <FormInputField
            title="Contract Name"
            value={contractName}
            setValue={setContractName}
            placeholder="Contract name"
            maxLength={50}
          />
          <FormUploadFile
            title="Upload Source Files"
            onFileDrop={handleFileDrop}
            placeholder="Drag and drop your .sol or .json files here"
            allowMultiple={false}
            acceptedFormats={[".sol"]}
          />
          <div className="text-lg text-white-400 text-lg">Advanced Details</div>
          <Divider />
          <FormInputField
            title="Optimization Runs"
            placeholder="Optimization value"
            value={optimizationValue}
            setValue={setOptimizationValue}
            maxLength={15}
            isDisabled={!optimizationOn}
            toggleLabel="Enable optimization"
            isToggleOn={optimizationOn}
            setIsToggleOn={(state) => {
              setOptimizationOn(state);
            }}
          />
          {evmVersion && (
            <FormDropdownComponent
              title="EVM Version"
              selectedOption={evmVersion}
              setSelectedOption={setEVMVersion}
              elements={availableEvmVersions}
            />
          )}
        </Card>
      </div>
    </div>
  );
}
