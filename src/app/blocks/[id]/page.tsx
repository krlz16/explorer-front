'use client';
import { useTab } from '@/hooks/useTab';
import { useEffect, useState } from 'react';
import { fetchTxsByBlock } from '@/services/transactions';
import { fetchInternalTxsByBlock } from '@/services/itxs';
import { BLOCKS_BTN_TABS } from '@/components/blocks/tabs/BlocksTabs';
import TableLoader from '@/components/loaders/TableLoader';
import BlockDetail from '@/components/blocks/tabs/BlockDetail';
import TxsTable from '@/components/txs/TxsTable';
import InternalTxsTable from '@/components/itxs/InternalTxsTable';
import Button from '@/components/ui/Button';
import { useBlocksDataContext } from '@/context/BlocksContext';

export default function BlockPage() {
  const { block, txsData, setTxsData, itxsData, setItxsData } =
    useBlocksDataContext();
  const [loading, setLoading] = useState<boolean>(false);

  const { changeTab, currentTab } = useTab({
    defaultTab: BLOCKS_BTN_TABS[0].tab,
  });

  useEffect(() => {
    const getTxsByBlock = async () => {
      if (currentTab !== 'txs' || txsData?.length) return;
      setLoading(true);
      const data = await fetchTxsByBlock(block!.number!);
      setTxsData(data?.data);
      setLoading(false);
    };

    const getInternalTxsByBlock = async () => {
      if (currentTab !== 'itxs' || itxsData?.length) return;
      setLoading(true);
      const data = await fetchInternalTxsByBlock(block!.number!);
      setItxsData(data?.data);
      setLoading(false);
    };
    getTxsByBlock();
    getInternalTxsByBlock();
  }, [
    block,
    currentTab,
    itxsData?.length,
    setItxsData,
    setTxsData,
    txsData?.length,
  ]);

  return (
    <div className="mt-6">
      <div className="flex gap-2">
        {BLOCKS_BTN_TABS.map((button, index) => (
          <Button
            key={index}
            label={button.label}
            className={
              currentTab === button.tab ? 'bg-btn-secondary text-white' : ''
            }
            onClick={() => changeTab(button.tab)}
          />
        ))}
      </div>
      <div className="mt-6">
        {loading && <TableLoader />}
        {currentTab === 'overview' && <BlockDetail />}
        {currentTab === 'txs' && !loading && <TxsTable txs={txsData} />}
        {currentTab === 'itxs' && !loading && (
          <InternalTxsTable itxs={itxsData} />
        )}
      </div>
    </div>
  );
}
