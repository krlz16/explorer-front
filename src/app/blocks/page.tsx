import BlocksTable from '../../components/blocks/BlocksTable';
import BlocksPagination from '@/components/ui/BlocksPagination';
import { IPageProps } from '@/common/interfaces/RouterParams';
import { BlockIcon } from '@/common/icons';
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
