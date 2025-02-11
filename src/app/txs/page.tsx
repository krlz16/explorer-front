import Pagination from '@/components/ui/Pagination';
import TxsTable from '@/components/txs/TxsTable';
import { IPageProps } from '@/common/interfaces/RouterParams';
import { TxIcon } from '@/common/icons';
import { fetchTxs } from '@/services/transactions';
import CardStat from '@/components/ui/CardStat';

export default async function page(props: IPageProps) {
  const params = await props.searchParams;
  const response = await fetchTxs(params);
  return (
    <div className="w-full">
      <h1 className="font-bold text-3xl flex gap-3 items-center mt-10">
        <TxIcon className="w-6 h-6" />
        Transactions
      </h1>
      {/* <div className="mt-8 flex justify-between gap-6">
        <CardStat
          title="6,320"
          subtitle="Transactions (24h)"
          icon={<TxIcon className="w-7 h-7" />}
        />
        <CardStat
          title="7"
          subtitle="Pending transactions"
          icon={<TxIcon className="w-7 h-7" />}
        />
        <CardStat
          title="70,663"
          subtitle="Network Txn Fee (24h)"
          icon={<TxIcon className="w-7 h-7" />}
        />
        <CardStat
          title="70,663"
          subtitle="Average Txn Fee (24h)"
          icon={<TxIcon className="w-7 h-7" />}
        />
      </div> */}
      <Pagination text="Total Transactions: " data={response!.pagination!} />
      <TxsTable txs={response?.data} />
    </div>
  );
}
