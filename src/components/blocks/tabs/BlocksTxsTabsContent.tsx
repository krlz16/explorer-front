import { IInternalTxs, ITxs } from "@/common/interfaces/Txs";
import InternalTxsTable from "@/components/itxs/InternalTxsTable";
import TxsTable from "@/components/txs/TxsTable";

type props = {
  currentTab: string
  txsData: ITxs[] | undefined
  itxsData: IInternalTxs[] | undefined
}

const BlocksTxsTabsContent = ({ currentTab, txsData, itxsData }: props) => {
  if (currentTab === "txs") return <TxsTable txs={txsData} />;
  if (currentTab === "itxs") return <InternalTxsTable itxs={itxsData} />;
  return null;
};
export default BlocksTxsTabsContent 