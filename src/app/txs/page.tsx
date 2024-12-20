
import { ITxs } from '@/common/interfaces/Txs';
import { fetchData } from '../lib/data'
import Pagination from '@/components/control/Pagination';
import TxsTable from '@/components/txs/TxsTable';
import { IPageProps } from '@/common/interfaces/RouterParams';
import { ROUTER } from '@/common/constants';
import { TxIcon } from '@/common/icons';

export default async function page(props: IPageProps) {
  const params = await props.searchParams;
  const response = await fetchData<ITxs[]>(ROUTER.TXS, params, 60);
  return (
    <div className='w-full'>
      <h1 className="font-bold text-3xl flex gap-3 items-center mt-10">
        <TxIcon className='w-6 h-6' />
        Transactions
      </h1>
      <Pagination
        text='Total Addresses: '
        data={response!.pagination}
      />
      <TxsTable txs={response?.data} />
    </div>
  )
}