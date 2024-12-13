'use client';

import TableLoader from "@/components/loaders/TableLoader";
import Button from "@/components/generals/Button";
import BlocksTabsContent from "@/components/blocks/tabs/BlocksTabsContent";
import { IInternalTxs, ITxs } from "@/common/interfaces/Txs";
import { useTab } from "@/hooks/useTab";
import { useParams } from "next/navigation";
import useFetch from "@/hooks/useFetch";
import { BLOCKS_URL_TABS } from "@/components/blocks/tabs/BlocksTabs";

export default function BlockPage() {
  const urlId = useParams();
  const { changeTab, currentTap } = useTab({ defaultTab: BLOCKS_URL_TABS[0].tab });

  const currentUrl = BLOCKS_URL_TABS.find((u) => u.tab === currentTap);

  if (!currentUrl) {
    return <div>tab Invalid data</div>;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, loading, error } = useFetch(`${currentUrl?.url}/${urlId.id}`);

  if (loading) return <div><TableLoader /></div>;
  if (error) return <div>Error</div>;


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
