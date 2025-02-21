import AddressesTable from '@/components/addresses/AddressesTable';
import { IPageProps } from '@/common/interfaces/RouterParams';
import { AddressIcon } from '@/common/icons';
import { fetchAddresses } from '@/services/addresses';
import PaginationCursor from '@/components/ui/PaginationCursor';

export default async function Page(props: IPageProps) {
  const params = await props.searchParams;
  const response = await fetchAddresses(params);
  return (
    <div className="w-full">
      <h1 className="font-bold text-3xl flex gap-3 items-center mt-10">
        <AddressIcon className="w-6 h-6" />
        Addresses
      </h1>
      <div className="mt-8">
        <PaginationCursor
          data={
            response?.paginationData || {
              nextCursor: response?.paginationData?.nextCursor ?? null,
              prevCursor: response?.paginationData?.prevCursor ?? null,
              take: response?.paginationData?.take ?? 10,
            }
          }
          pureData={response?.data}
          dataIndicator="addresses"
        />
      </div>
      <AddressesTable addresses={response?.data} />
    </div>
  );
}
