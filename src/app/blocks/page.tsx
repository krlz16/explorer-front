import BlocksTable from '../../components/blocks/BlocksTable';
import BlocksPagination from '@/components/ui/BlocksPagination';
import { IPageProps } from '@/common/interfaces/RouterParams';
import { BlockIcon, TxIcon } from '@/common/icons';
import { fetchBlocks } from '@/services/blocks';

export default async function page(props: IPageProps) {
  const params = await props.searchParams;
  const response = await fetchBlocks(params);

  return (
    <div className="w-full">
      <h1 className="font-bold text-3xl flex gap-3 items-center mt-10">
        <BlockIcon className="w-6 h-6" />
        Blocks
      </h1>

      <div className="mt-8 flex justify-between gap-6">
        <div className="h-20 w-full p-4 rounded-xl bg-secondary flex justify-between items-center">
          <div>
            <div className="font-bold text-2xl">34%</div>
            <div className="text-sm text-white-400">
              Network Utilization (24h)
            </div>
          </div>
          <div>
            <TxIcon className="w-7 h-7" />
          </div>
        </div>
        <div className="h-20 w-full p-4 rounded-xl bg-secondary flex justify-between items-center">
          <div>
            <div className="font-bold text-2xl">70,663</div>
            <div className="text-sm text-white-400">Gas Rate</div>
          </div>
          <div>
            <TxIcon className="w-7 h-7" />
          </div>
        </div>

        <div className="h-20 w-full p-4 rounded-xl bg-secondary flex justify-between items-center">
          <div>
            <div className="font-bold text-2xl">5,970,172</div>
            <div className="text-sm text-white-400">Last Safe Block</div>
          </div>
          <div>
            <BlockIcon className="w-7 h-7" fill="fill-white" />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <BlocksPagination
          data={
            response?.paginationBlocks || {
              nextCursor: response?.paginationBlocks?.nextCursor ?? null,
              prevCursor: response?.paginationBlocks?.prevCursor ?? null,
              take: response?.paginationBlocks?.take ?? 10,
            }
          }
        />
      </div>

      <BlocksTable blocks={response?.data} />
    </div>
  );
}
