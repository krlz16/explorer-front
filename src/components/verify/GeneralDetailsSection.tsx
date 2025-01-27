'use client';

import Divider from '@/components/ui/Divider';
import FormDropdownComponent, {
  DropDownOption,
} from '@/components/ui/FormDropdown';

import { VerificationMethods } from '@/constants/verificationConstants';
import FormInputField from '@/components/ui/FormInputField';
import FormUploadFile from '@/components/ui/FormUploadFile';

import { Fragment } from 'react';

type Props = {
  handleFileDrop: (files: File[]) => void;
  isNightly: boolean;
  setIsNightly: (isNightly: boolean) => void;
  contractName: string;
  setContractName: (contractName: string) => void;
  filteredCompilers: DropDownOption[];
  verifMethod: DropDownOption;
  setVerifMethod: (verifMethod: DropDownOption) => void;
  compilerVersion: DropDownOption | undefined;
  setCompilerVersion: (compilerVersion: DropDownOption) => void;
};

export default function GeneralDetailsSection({
  handleFileDrop,
  isNightly,
  setIsNightly,
  contractName,
  setContractName,
  filteredCompilers,
  verifMethod,
  setVerifMethod,
  compilerVersion,
  setCompilerVersion,
}: Props) {
  return (
    <Fragment>
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
        allowMultiple={true}
        acceptedFormats={['.sol']}
      />
    </Fragment>
  );
}
