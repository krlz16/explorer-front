
export interface IAddresses {
  id: number;
  address: string;
  isNative: boolean;
  type: string;
  name?: string | null;
  symbol?: string | null;
  balance: number;
  blockNumber: number;
  code: string
  createdByTx?: {
    timestamp: string
    receipt: {
      transactionHash: string
    }
    internalTxId: string
  }
  interfaces: string[]
  totalSupply: number
}

export interface IContractDetail {
  request: {
    address: string
    bytecode: string
    deployedBytecode: string
    imports: [
      {
        contents: string
        file: string
      }
    ]
    version: string
    settings: {
      evmVersion: string
      optimizer: {
        enabled: boolean
        runs: number
      }
    }
  }
  timestamp: string
}