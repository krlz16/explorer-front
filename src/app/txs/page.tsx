import Pagination from '@/components/ui/Pagination';
import TxsTable from '@/components/txs/TxsTable';
import { IPageProps } from '@/common/interfaces/RouterParams';
import { TxIcon } from '@/common/icons';
import { fetchTxs } from '@/services/transactions';
import PageTitle from '@/components/ui/PageTitle';

export default async function page(props: IPageProps) {
  const params = await props.searchParams;
  const response = await fetchTxs(params);
  return (
    <div className="w-full">
      <PageTitle title="Transactions" icon={<TxIcon className="w-6 h-6" />} />
      <Pagination data={response!.pagination!} />
      <TxsTable txs={response?.data} />
    </div>
  );
}
