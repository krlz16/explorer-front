'use client';

import TableLoader from "@/components/loaders/TableLoader";
import Button from "@/components/ui/Button";
import BlocksTabsContent from "@/components/blocks/tabs/BlocksTxsTabsContent";
import { IInternalTxs, ITxs } from "@/common/interfaces/Txs";
import { useTab } from "@/hooks/useTab";
import { useParams } from "next/navigation";
import useFetch from "@/hooks/useFetch";
import { BLOCKS_URL_TABS } from "@/components/blocks/tabs/BlocksTabs";

export default function BlockPage() {
  const urlId = useParams();
  const { changeTab, currentTap } = useTab({ defaultTab: BLOCKS_URL_TABS[0].tab });
  console.log('currentTap: ', currentTap);
  
  const currentUrl = BLOCKS_URL_TABS.find((u) => u.tab === currentTap);

  if (!currentUrl?.url) {
    return <div>tab Invalid data</div>;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, loading, error } = useFetch(`${currentUrl?.url}/${urlId.id}`);
  console.log('data: ', data);
  console.log('loading: ', loading);

  if (loading || !data) return <div><TableLoader /></div>;
  if (error) return <div className='w-full flex justify-center mt-10'>
  <span className='text-3xl italic text-gray-700'>Something was wrong try again</span>
</div>;


  return (
    <div className="mt-8 p-6">
      <div className="flex gap-4">
        {
          BLOCKS_URL_TABS.map((btn, i) => (
            <Button
              key={i}
              label={btn.label}
              onClick={() => changeTab(btn.tab)}
              className={ currentTap === btn.tab ? 'bg-brand-green text-black' : ''}
            />
          ))
        }
      </div>
      <div className="mt-4">
        <BlocksTabsContent
          currentTap={currentTap}
          txsData={data?.data as unknown as ITxs[]}
          itxsData={data?.data as unknown as IInternalTxs[]}
        />
      </div>
    </div>
  );
}
