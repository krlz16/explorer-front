'use client';

import Button from "@/components/ui/Button";
import { ADDRESSES_BTN_TABS } from "@/components/addresses/tabs/AddressesTabs";
import { useTab } from "@/hooks/useTab";
import AddressDetail from "@/components/addresses/tabs/AddressDetail";
import ContractDetail from "@/components/addresses/Contract/ContractDetail";
import { useEffect, useState } from "react";
import { fetchContractVerification } from "@/services/addresses";
import { useAddressDataContext } from "@/context/AddressContext";
import TableLoader from "@/components/loaders/TableLoader";
import ContractUnverified from "@/components/addresses/Contract/ContractUnverified";
import { fetchTxsByAddress } from "@/services/transactions";
import { IInternalTxs, ITxs } from "@/common/interfaces/Txs";
import AddressesTxsTabsContent from "@/components/addresses/tabs/AddressesTxsTabsContent";
import { fetchInternalTxsByAddress } from "@/services/itxs";
import { fetchEventsByAddress } from "@/services/events";
import { IEvents } from "@/common/interfaces/IEvents";

export default function Page() {
  const { address, setContractVerification } = useAddressDataContext();
  const [txsByAddress, setTxsByAddress] = useState<ITxs[] | undefined>();
  const [itxsByAddress, setITxsByAddress] = useState<IInternalTxs[] | undefined>();
  const [eventsByAddress, setEventsByAddress] = useState<IEvents[] | undefined>();
  const { changeTab, currentTab } = useTab({ defaultTab: ADDRESSES_BTN_TABS[0].tab });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getContractVerification = async () => {
      if (currentTab !== 'contract') return;
      setLoading(true);
      const response = await fetchContractVerification(address!.address);
      setContractVerification(response?.data);
      setLoading(false);
    }

    const getTxsByAddress = async () => {
      if (currentTab !== 'txs') return;
      setLoading(true);
      const response = await fetchTxsByAddress(address!.address);
      setTxsByAddress(response?.data);
      setLoading(false);
    }

    const getITxsByAddress = async () => {
      if (currentTab !== 'itxs') return;
      setLoading(true);
      const response = await fetchInternalTxsByAddress(address!.address);
      setITxsByAddress(response?.data);
      setLoading(false);
    }

    const getEventsByAddress = async () => {
      if (currentTab !== 'events') return;
      setLoading(true);
      const response = await fetchEventsByAddress(address!.address);
      console.log('response: ', response);
      setEventsByAddress(response?.data);
      setLoading(false);
    }

    getContractVerification();
    getTxsByAddress();
    getITxsByAddress();
    getEventsByAddress();
  }, [currentTab, address, setContractVerification]);
  
  return (
    <div className="mt-6">
      <AddressDetail />
      <div className="flex gap-2 mt-6">
        {
          ADDRESSES_BTN_TABS.map((btn, i) => {
            if (address?.type === 'account' && btn.tab === 'accounts') return
            if (address?.type === 'account' && btn.tab === 'contract') return
            return (
              <Button
                key={i}
                label={btn.label}
                onClick={() => changeTab(btn.tab)}
                className={ currentTab === btn.tab ? 'bg-btn-secondary text-white' : ''}
              />
            )
          })
        }
      </div>
      
      {
        !loading && (
          <AddressesTxsTabsContent
            currentTab={currentTab}
            itxs={itxsByAddress}
            txs={txsByAddress}
            events={eventsByAddress}
          />
        )
      }
      { loading && <TableLoader />}
      { (currentTab === 'contract' && !loading && address?.isVerified) && <ContractDetail />}
      { (currentTab === 'contract' && !loading && !address?.isVerified) && <ContractUnverified />}
    </div>
  );
}
