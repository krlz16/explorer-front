import Pagination from '@/components/ui/Pagination';
import { IPageProps } from '@/common/interfaces/RouterParams';
import TokensTable from '@/components/tokens/TokensTable';
import { fetchTokens } from '@/services/tokens';

export default async function page(props: IPageProps) {
  const params = await props.searchParams;
  const response = await fetchTokens(params);
  return (
    <div className="w-full">
      <Pagination text="Total tokens" data={response!.pagination!} />
      <TokensTable tokens={response?.data} />
    </div>
  );
}
