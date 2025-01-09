
import { fetchData } from '../lib/data'
import Pagination from '@/components/ui/Pagination';
import { IPageProps } from '@/common/interfaces/RouterParams';
import TokensTable from '@/components/tokens/TokensTable';
import { ITokens } from '@/common/interfaces/Tokens';
import { ROUTER } from '@/common/constants';

export default async function page(props: IPageProps) {
  const params = await props.searchParams;
  const response = await fetchData<ITokens[]>(ROUTER.TOKENS, params)
  return (
    <div className='w-full'>
      <TokensTable tokens={response?.data} />
      <Pagination
        text='Total tokens'
        data={response!.pagination!}
      />
    </div>
  )
}