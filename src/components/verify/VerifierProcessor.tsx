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
  imports?: File[];
  source?: string;
  libraries?: Record<string, string>;
  constructorArguments?: string[];
  encodedConstructorArguments?: string;
}

export const buildRequestParams = ({
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
}: {
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
}): RequestParams | null => {
  if (!address || !contractName || !compilerVersion) {
    console.error('Missing required fields');
    return null;
  }

  const params: RequestParams = {
    address,
    settings: {
      optimizer: {
        enabled: optimizationOn,
        runs: parseInt(optimizationValue || '200', 10),
      },
      evmVersion,
    },
    version: compilerVersion,
    name: contractName,
  };

  if (files.length > 0) {
    params.imports = files;
    params.source = files[0]?.name || ''; // Assuming the first file is the main source file.
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

  if (abiEncoded) {
    params.encodedConstructorArguments = constructorArgs;
  } else if (constructorArgs) {
    params.constructorArguments = constructorArgs.split(',');
  }

  return params;
};

export const submitVerificationRequest = async () => {
  try {
    //TODO add request to submit verification
  } catch (error) {
    console.error('Error submitting verification request:', error);
  }
};

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
}) => {
  const errors: string[] = [];

  if (!contractName || contractName.trim() === '') {
    errors.push('Contract name is required.');
  }

  if (files.length === 0) {
    errors.push('At least one file must be uploaded.');
  }

  if (optimizationOn) {
    const runs = parseInt(optimizationValue, 10);
    if (isNaN(runs) || runs <= 0) {
      errors.push('Optimization runs must be a valid number greater than 0.');
    }
  }

  return errors;
};
