
import { IBlocks } from '@/common/interfaces/Blocks';
import BlocksTable from '../../components/blocks/BlocksTable'
import { fetchData } from '../lib/data'
import Pagination from '@/components/control/Pagination';
import { IPageProps } from '@/common/interfaces/RouterParams';
import { ROUTER } from '@/common/constants';
import { BlockIcon } from '@/common/icons';

export default async function page(props: IPageProps) {
  const params = await props.searchParams;
  const response = await fetchData<IBlocks[]>(ROUTER.BLOCKS.INDEX, params, 60)
  return (
    <div className='w-full'>
      <h1 className="font-bold text-3xl flex gap-3 items-center mt-10">
        <BlockIcon className='w-6 h-6' />
        Blocks
      </h1>
      <BlocksTable
        blocks={response?.data}
      />
      <Pagination
        data={response!.pagination}
      />
    </div>
  )
}