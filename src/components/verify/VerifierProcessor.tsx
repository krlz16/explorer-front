import { Errors } from '@/app/verify/[address]/page';
import { DropDownOption } from '../ui/FormDropdown';
import { postData } from '@/services/api';
import { IVerificationResponse } from '@/common/interfaces/IVerificationResponse';

export type BuilderRequestParams = {
  address: string;
  optimizationOn: boolean;
  optimizationValue: string;
  evmVersion?: string;
  contractName: string;
  compilerVersion: string;
  files: File[];
  libraries: { libraryName: string; libraryAddress: string }[];
  constructorArgs: string;
  abiEncoded: boolean;
  verifMethod: DropDownOption;
};
interface RequestParams {
  address: string;
  settings: {
    optimizer: {
      enabled: boolean;
      runs: number;
    };
    evmVersion?: string;
  };
  version: string;
  name: string;
  imports?: { name: string; contents: string }[];
  source?: string;
  sources?: {
    [key: string]: {
      content: string;
    };
  };
  libraries?: Record<string, string>;
  constructorArguments?: string[];
  encodedConstructorArguments?: string;
}

export const validateForm = ({
  contractName,
  files,
  optimizationOn,
  optimizationValue,
}: {
  contractName: string;
  files: File[];
  optimizationOn: boolean;
  optimizationValue: string;
}): Errors => {
  const errors: Errors = {
    contractName: '',
    files: '',
    optimizationValue: '',
  };

  //TODO add JSON input field validations for having sources and settings section

  if (!contractName || contractName.trim() === '') {
    errors.contractName = 'Contract name is required.';
  }

  if (files.length === 0) {
    errors.files = 'At least one file must be uploaded.';
  }

  if (optimizationOn) {
    const runs = parseInt(optimizationValue, 10);
    if (isNaN(runs) || runs <= 0) {
      errors.optimizationValue =
        'Optimization runs must be a valid number greater than 0.';
    }
  }

  return errors;
};

export const submitRequest = async (
  params: BuilderRequestParams
): Promise<IVerificationResponse | undefined> => {
  try {
    const requestParams = await buildRequestParams(params);
    if (requestParams) {
      const response = await submitVerificationRequest(
        requestParams,
        params.verifMethod.key !== 'solidity' ? params.files : []
      );
      return response;
    }
  } catch (error) {
    throw new Error(`Error submitting request with error ${error}`);
  }
};

export const buildRequestParams = async ({
  address,
  optimizationOn,
  optimizationValue,
  evmVersion,
  contractName,
  compilerVersion,
  files,
  libraries,
  constructorArgs,
  abiEncoded,
  verifMethod,
}: BuilderRequestParams): Promise<RequestParams | undefined> => {
  if (!address || !contractName || !compilerVersion) {
    console.error('Missing required fields');
    return undefined;
  }
  try {
    const params: RequestParams = {
      address,
      settings: {
        optimizer: {
          enabled: optimizationOn,
          runs: optimizationOn ? parseInt(optimizationValue || '200', 10) : 0,
        },
        evmVersion,
      },
      version: compilerVersion,
      name: contractName,
    };
    if (verifMethod.key === 'solidity') {
      if (files.length > 0) {
        params.imports = await Promise.all(
          files.map(async (file) => {
            const contents = await file.text();
            return { name: file.name, contents };
          })
        );
        params.source = params.imports[0]?.contents || '';
      }
      if (libraries.length > 0) {
        params.libraries = libraries.reduce(
          (acc, lib) => {
            if (lib.libraryName && lib.libraryAddress) {
              acc[lib.libraryName] = lib.libraryAddress;
            }
            return acc;
          },
          {} as Record<string, string>
        );
      }
    }

    if (abiEncoded) {
      params.encodedConstructorArguments = constructorArgs;
    } else if (constructorArgs) {
      params.constructorArguments = constructorArgs.split(',');
    }

    return params;
  } catch (error) {
    console.error('Error building request params:', error);
    return undefined;
  }
};

export const submitVerificationRequest = async (
  requestParams: RequestParams,
  files: File[]
): Promise<IVerificationResponse | undefined> => {
  try {
    const response = await postData<IVerificationResponse>(
      '/verifications/verify',
      requestParams,
      files
    );
    if (!response) {
      console.error('No response from verification request');
      return undefined;
    }
    return response;
  } catch (error) {
    console.error('Error submitting verification request:', error);
    throw new Error(
      `Error submitting verification request with error ${error}`
    );
  }
};
