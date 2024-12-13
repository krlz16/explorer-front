export interface IBlocks {
  id: string;
  number: number;
  hash: string;
  parentHash: string;
  sha3Uncles: string;
  logsBloom: string;
  transactionsRoot: string;
  stateRoot: string;
  receiptsRoot: string;
  miner: string;
  difficulty: string;
  totalDifficulty: string;
  extraData: string;
  size: number;
  gasLimit: number;
  gasUsed: number;
  timestamp: string;
  transactions: number;
  uncles: string;
  minimumGasPrice: string;
  bitcoinMergedMiningHeader: string;
  bitcoinMergedMiningCoinbaseTransaction: string;
  bitcoinMergedMiningMerkleProof: string;
  hashForMergedMining: string;
  paidFees: string;
  cumulativeDifficulty: string;
  received: string;
}