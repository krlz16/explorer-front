import { fetchData } from '../lib/data';
import Pagination from '@/components/ui/Pagination';
import { IAddresses } from '@/common/interfaces/Addresses';
import AddressesTable from '@/components/addresses/AddressesTable';
import { IPageProps } from '@/common/interfaces/RouterParams';
import { ROUTER } from '@/common/constants';
import { AddressIcon } from '@/common/icons';

export default async function Page(props: IPageProps) {
  const params = await props.searchParams;
  const response = await fetchData<IAddresses[]>(ROUTER.ADDRESSES.INDEX, params);
  console.log('response: ', response?.pagination);
  return (
    <div className='w-full'>
      <h1 className="font-bold text-3xl flex gap-3 items-center mt-10">
        <AddressIcon className='w-6 h-6' />
        Addresses
      </h1>
      <Pagination
        text='Total Addresses'
        data={response!.pagination!}
      />
      <AddressesTable
        addresses={response?.data}
      />
    </div>
  );
}
