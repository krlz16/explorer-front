export interface ITxs {
  hash: string
  blockNumber: number,
  from: string
  to: string
  value: string
  gasUsed: number,
  timestamp: string,
  txType: string
  receipt: {
    logs: ILogs[]
  },
}

export interface IInternalTxs {
  from: string
  to: string
  value: string
  timestamp: string,
  type: string
  internalTxId: string,
}

export interface ILogs {
  logIndex: number;
  blockNumber: number;
  blockHash: string;
  transactionHash: string;
  transactionIndex: number;
  address: string;
  data: string;
  topics: string[];
  event: string;
  signature: string;
  abi: {
    anonymous: boolean;
    inputs: {
      indexed: boolean;
      name: string;
      type: string;
    }[];
    name: string;
    type: string;
  };
  args: string[];
  _addresses: string[];
  eventId: string;
  timestamp: number;
  txStatus: string;
}
