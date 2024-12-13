import { IInternalTxs, ITxs } from "@/common/interfaces/Txs";
import InternalTxsTable from "@/components/itxs/InternalTxsTable";
import TxsTable from "@/components/txs/TxsTable";

type props = {
  currentTap: string
  txsData: ITxs[] | undefined
  itxsData: IInternalTxs[] | undefined
}

const BlocksTabsContent = ({ currentTap, txsData, itxsData }: props) => {
  if (currentTap === "txs") return <TxsTable txs={txsData} />;
  if (currentTap === "itxs") return <InternalTxsTable itxs={itxsData} />;
  return null;
};
export default BlocksTabsContent 