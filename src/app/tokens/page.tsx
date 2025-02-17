import Pagination from '@/components/ui/Pagination';
import { IPageProps } from '@/common/interfaces/RouterParams';
import TokensTable from '@/components/tokens/TokensTable';
import { fetchTokens } from '@/services/tokens';
import PaginationCursor from '@/components/ui/PaginationCursor';

export default async function page(props: IPageProps) {
  const params = await props.searchParams;
  const response = await fetchTokens(params);
  return (
    <div className="w-full">
      <div className="mt-8">
        <PaginationCursor
          data={
            response?.paginationData || {
              nextCursor: response?.paginationData?.nextCursor ?? null,
              prevCursor: response?.paginationData?.prevCursor ?? null,
              take: response?.paginationData?.take ?? 50,
            }
          }
        />
      </div>
      <TokensTable tokens={response?.data} />
    </div>
  );
}
