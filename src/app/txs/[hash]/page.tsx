'use client';

import { useParams } from "next/navigation";
import TableLoader from "@/components/loaders/TableLoader";
import Button from "@/components/ui/Button";
import useFetch from "@/hooks/useFetch";
import { ROUTER } from "@/common/constants";
import InternalTxsTable from "@/components/itxs/InternalTxsTable";
import { IInternalTxs } from "@/common/interfaces/Txs";
import { TXS_URL_TABS } from "@/components/txs/tabs/TxsTabs";
import { useTab } from "@/hooks/useTab";

export default function Page() {
  const urlhash = useParams();
  const { changeTab, currentTap } = useTab({ defaultTab: TXS_URL_TABS[0].tab });

  const currentUrl = TXS_URL_TABS.find((u) => u.tab === currentTap);

  if (!currentUrl?.url) {
    return <div>tab Invalid data</div>;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, loading} = useFetch<IInternalTxs[]>(`${ROUTER.ITXS.TX}/${urlhash.hash}`)

  if (loading) return <div><TableLoader /></div>;
  if (error) return <div className='w-full flex justify-center mt-10'>
    <span className='text-6xl italic text-gray-700'>Something was wrong try again</span>
  </div>;

  return (
    <div className="mt-14">
      <div className="flex gap-4">
        {
          TXS_URL_TABS.map((btn, i) => (
            <Button
              key={i}
              label={btn.label}
              onClick={() => changeTab(btn.tab)}
              className={ currentTap === btn.tab ? 'bg-brand-orange text-black' : ''}
            />
          ))
        }
      </div>
      <div className="mt-4">
        <InternalTxsTable
          itxs={data?.data}
        />
      </div>
    </div>
  );
}
