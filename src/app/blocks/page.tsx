
import { IBlocks } from '@/common/interfaces/Blocks';
import BlocksTable from '../../components/blocks/BlocksTable'
import { fetchData } from '../lib/data'
import Pagination from '@/components/control/Pagination';
import { IPageProps } from '@/common/interfaces/RouterParams';
import { ROUTER } from '@/common/constants';
import { ArrowLeftIcon, ArrowRightIcon, BlockIcon, TxIcon } from '@/common/icons';
import Button from '@/components/generals/Button';

export default async function page(props: IPageProps) {
  const params = await props.searchParams;
  const response = await fetchData<IBlocks[]>(ROUTER.BLOCKS.INDEX, params, 60)
  return (
    <div className='w-full'>
      <h1 className="font-bold text-3xl flex gap-3 items-center mt-10">
        <BlockIcon className='w-6 h-6' />
        Blocks
      </h1>
      <div className='mt-8 flex justify-between gap-6'>
        <div className='h-20 w-full p-4 rounded-xl bg-secondary flex justify-between items-center'>
          <div>
            <div className='font-bold text-2xl'>34%</div>
            <div className='text-sm text-white-400'>Network Utilization (24h)</div>
          </div>
          <div>
            <TxIcon className='w-7 h-7' />
          </div>
        </div>
        <div className='h-20 w-full p-4 rounded-xl bg-secondary flex justify-between items-center'>
          <div>
            <div className='font-bold text-2xl'>70,663</div>
            <div className='text-sm text-white-400'>Gas Rate</div>
          </div>
          <div>
            <TxIcon className='w-7 h-7' />
          </div>
        </div>
        <div className='h-20 w-full p-4 rounded-xl bg-secondary flex justify-between items-center'>
          <div>
            <div className='font-bold text-2xl'>4,901,138</div>
            <div className='text-sm text-white-400'>Last Safe Block</div>
          </div>
          <div>
            <BlockIcon className='w-7 h-7' fill='fill-white' />
          </div>
        </div>
      </div>
      <Pagination
        text='Total Blocks: '
        data={response!.pagination}
      />
      <BlocksTable
        blocks={response?.data}
      />
    </div>
  )
}