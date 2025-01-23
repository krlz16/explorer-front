'use client';

import TableLoader from "@/components/loaders/TableLoader";
import Button from "@/components/ui/Button";
import useFetch from "@/hooks/useFetch";
import { IInternalTxs, ITxs } from "@/common/interfaces/Txs";
import { useParams } from "next/navigation";
import { ADDRESSES_URL_TABS } from "@/components/addresses/tabs/AddressesTabs";
import { useTab } from "@/hooks/useTab";
import AddressesTxsTabsContent from "@/components/addresses/tabs/AddressesTxsTabsContent";
import { IEvents } from "@/common/interfaces/IEvents";
import Card from "@/components/ui/Card";
import Divider from "@/components/ui/Divider";

export default function Page() {
  const hash = useParams();

  const { changeTab, currentTap } = useTab({ defaultTab: ADDRESSES_URL_TABS[0].tab });

  const currentUrl = ADDRESSES_URL_TABS.find((a) => a.tab === currentTap);

  if (!currentUrl?.url) {
    return <div>tab Invalid data</div>;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  console.log('currentUrl: ', `${currentUrl?.url}/${hash.address}`);

  const { data, loading, error } = useFetch(`${currentUrl?.url}/${hash.address}`);

  if (loading) return <div><TableLoader /></div>;
  if (error) return <div>Error</div>;

  return (
    <div className="mt-10 p-6 items-center flex flex-col" >
      <div className="p-4 rounded-lg w-4/5">
        <Card className='bg-secondary h-50 flex flex-col'>
          <div className='text-lg text-white-400 text-lg'>
            General Details
          </div>
          <Divider />
        </Card>
      </div>
    </div>
  );
}
