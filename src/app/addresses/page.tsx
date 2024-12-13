import { fetchData } from '../lib/data';
import Pagination from '@/components/control/Pagination';
import { IAddresses } from '@/common/interfaces/Addresses';
import AddressesTable from '@/components/addresses/AddressesTable';
import { IPageProps } from '@/common/interfaces/RouterParams';
import { ROUTER } from '@/common/constants';
import { AddressIcon } from '@/common/icons';

export default async function Page(props: IPageProps) {
  const params = await props.searchParams;
  const response = await fetchData<IAddresses[]>(ROUTER.ADDRESSES, params);
  return (
    <div className='w-full'>
      <h1 className="font-bold text-3xl flex gap-3 items-center mt-10">
        <AddressIcon className='w-6 h-6' />
        Addresses
      </h1>
      <AddressesTable
        addresses={response?.data}
      />
      <Pagination
        data={response!.pagination}
      />
    </div>
  );
}
