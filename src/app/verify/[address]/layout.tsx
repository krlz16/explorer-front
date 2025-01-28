import { ROUTER } from '@/common/constants';
import { AddressIcon } from '@/common/icons';
import { ADDRESSES_BTN_TABS } from '@/components/addresses/tabs/AddressesTabs';
import Card from '@/components/ui/Card';
import PageHeader from '@/components/page/PageHeader';
import { fetchAddress } from '@/services/addresses';
import ToolTip from '@/components/ui/ToolTip';

type props = {
  params: Promise<{
    address: string;
  }>;
  children: React.ReactNode;
};

export default async function layout({ children, params }: props) {
  const addressParam = (await params).address;
  const response = await fetchAddress(addressParam);
  const address = response?.data;

  return (
    <Card pd="p0">
      <h1 className="flex gap-3 items-center text-4xl mt-[40px]">
        {'Verify Contract'.toUpperCase()}
      </h1>
      <div className="text-white-400 mt-6">
        {'Contract addess'}
        <span className="text-brand-green ml-1">
          <ToolTip text={address?.address} trim={0} />
        </span>
      </div>
      {children}
    </Card>
  );
}
