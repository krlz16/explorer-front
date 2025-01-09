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

export default function Page() {
  const hash = useParams();

  const { changeTab, currentTap } = useTab({ defaultTab: ADDRESSES_URL_TABS[0].tab });
  
  const currentUrl = ADDRESSES_URL_TABS.find((a) => a.tab === currentTap);

  if (!currentUrl?.url) {
    return <div>tab Invalid data</div>;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, loading, error } = useFetch(`${currentUrl?.url}/${hash.address}`);

  if (loading) return <div><TableLoader /></div>;
  if (error) return <div>Error</div>;

  return (
    <div className="mt-10 p-6">
      <div className="flex gap-4">
        {
          ADDRESSES_URL_TABS.map((btn, i) => (
            <Button
              key={i}
              label={btn.label}
              onClick={() => changeTab(btn.tab)}
              className={ currentTap === btn.tab ? 'bg-brand-pink text-white' : ''}
            />
          ))
        }
      </div>

      <div className="mt-4">
        <AddressesTxsTabsContent
          currentTap={currentTap}
          itxs={data?.data as IInternalTxs[]}
          txs={data?.data as ITxs[]}
          events={data?.data as IEvents[]}
        />
      </div>
    </div>
  );
}
