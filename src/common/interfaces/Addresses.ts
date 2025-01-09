
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
}