'use client';

import Button from "@/components/ui/Button";
import { TXS_BTN_TABS } from "@/components/txs/tabs/TxsTabs";
import { useTab } from "@/hooks/useTab";
import TxDetail from "@/components/txs/tabs/TxDetail";
import TableLoader from "@/components/loaders/TableLoader";
import { useEffect, useState } from "react";
import { fetchInternalTxsByTxHash } from "@/services/itxs";
import { useTxsDataContext } from "@/context/TxsContext";
import InternalTxsTable from "@/components/itxs/InternalTxsTable";
import LogsContainer from "@/components/txs/Logs/LogsContainer";
import { fetchTransferEventByTxhash } from "@/services/events";
import TokenTransfersTable from "@/components/transfer/TokenTransfersTable";

export default function Page() {
  const { tx, itxsData, setItxsData, tokensData, setTokensData } = useTxsDataContext();
  const { changeTab, currentTap } = useTab({ defaultTab: TXS_BTN_TABS[0].tab });
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getInternalTxsByTxHash = async () => {
      if (currentTap !== 'itxs' || itxsData?.length) return;
      setLoading(true);
      const data = await fetchInternalTxsByTxHash(tx!.hash!);
      setItxsData(data?.data);
      setLoading(false);
    }
    const getTransferEventByTxhash = async () => {
      if (currentTap !== 'ttransfer' || tokensData?.length) return;
      setLoading(true);
      const data = await fetchTransferEventByTxhash(tx!.hash!);
      console.log('data: ', data);
      setTokensData(data?.data);
      setLoading(false);
    }
    getInternalTxsByTxHash();
    getTransferEventByTxhash();
  }, [currentTap, itxsData?.length, setItxsData, setTokensData, tokensData?.length, tx]);

  return (
    <div className="mt-6">
      <div className="flex gap-4">
        {
          TXS_BTN_TABS.map((btn, i) => (
            <Button
              key={i}
              label={btn.label}
              className={currentTap === btn.tab ? 'bg-btn-secondary text-white' : ""}
              onClick={() => changeTab(btn.tab)}
            />
          ))
        }
      </div>
      <div className="mt-6">
        { loading && <TableLoader />}
        { (currentTap === 'overview' && !loading) && <TxDetail />}
        { (currentTap === 'itxs' && !loading) && <InternalTxsTable itxs={itxsData} />}
        { (currentTap === 'logs' && !loading) && <LogsContainer />}
        { (currentTap === 'ttransfer' && !loading) && 
          <>
            {
              tokensData?.length ? 
                <TokenTransfersTable tokens={tokensData} />
              : (
                <div className='text-center'>The Transaction Does Not Contain Token Transfer Events</div>
              )
            }
          </>
        }
      </div>
    </div>
  );
}
