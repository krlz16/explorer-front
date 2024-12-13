
export interface IAddresses {
  id: number;
  address: string;
  isNative: boolean;
  type: string;
  name: string | null;
  balance: string;
  blockNumber: number;
  code: string
}