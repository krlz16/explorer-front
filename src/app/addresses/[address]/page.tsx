'use client';

import Button from '@/components/ui/Button';
import { ADDRESSES_BTN_TABS } from '@/components/addresses/tabs/AddressesTabs';
import { useTab } from '@/hooks/useTab';
import AddressDetail from '@/components/addresses/tabs/AddressDetail';
import ContractDetail from '@/components/addresses/Contract/ContractDetail';
import { useCallback, useEffect, useState } from 'react';
import { fetchContractVerification } from '@/services/addresses';
import { useAddressDataContext } from '@/context/AddressContext';
import TableLoader from '@/components/loaders/TableLoader';
import ContractUnverified from '@/components/addresses/Contract/ContractUnverified';
import { fetchTxsByAddress } from '@/services/transactions';
import { IInternalTxs, ITxs } from '@/common/interfaces/Txs';
import AddressesTxsTabsContent from '@/components/addresses/tabs/AddressesTxsTabsContent';
import { fetchInternalTxsByAddress } from '@/services/itxs';
import {
  fetchEventsByAddress,
  fetchTransferEventsByAddress,
} from '@/services/events';
import { IEvents } from '@/common/interfaces/IEvents';
import { fetchBalancesByAddress } from '@/services/balances';
import { IBalances } from '@/common/interfaces/Balances';
import { fetchTokenAddress } from '@/services/tokens';
import { ITokens } from '@/common/interfaces/Tokens';
import { CheckIcon } from '@/common/icons';

type ITabType =
  | 'contract'
  | 'txs'
  | 'itxs'
  | 'events'
  | 'token_transfer'
  | 'tokens'
  | 'balances';

export default function Page() {
  const { address, setContractVerification } = useAddressDataContext();
  const [txsByAddress, setTxsByAddress] = useState<ITxs[] | undefined>();
  const [itxsByAddress, setITxsByAddress] = useState<
    IInternalTxs[] | undefined
  >();
  const [eventsByAddress, setEventsByAddress] = useState<
    IEvents[] | undefined
  >();
  const [transferByAddress, setTransferByAddress] = useState<
    IEvents[] | undefined
  >();
  const [balancesByAddress, setBalancesByAddress] = useState<
    IBalances[] | undefined
  >();
  const [tokenByAddress, setTokenByAddress] = useState<
    ITokens[] | undefined
  >();
  const { changeTab, currentTab } = useTab({
    defaultTab: ADDRESSES_BTN_TABS[0].tab,
  });
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(
    async (tab: ITabType, address: string) => {
      if (!address) return;

      setLoading(true);

      // TODO: Improve this section
      try {
        let data;

        if (tab === 'contract') {
          data = await fetchContractVerification(address);
          setContractVerification(data?.data);
        } else if (tab === 'txs') {
          data = await fetchTxsByAddress(address);
          setTxsByAddress(data?.data);
        } else if (tab === 'itxs') {
          data = await fetchInternalTxsByAddress(address);
          setITxsByAddress(data?.data);
        } else if (tab === 'events') {
          data = await fetchEventsByAddress(address);
          setEventsByAddress(data?.data);
        } else if (tab === 'token_transfer') {
          data = await fetchTransferEventsByAddress(address);
          setTransferByAddress(data?.data);
        } else if (tab === 'tokens') {
          data = await fetchTokenAddress(address);
          setTokenByAddress(data?.data);
        } else if (tab === 'balances') {
          data = await fetchBalancesByAddress(address);
          setBalancesByAddress(data?.data);
        }
      } catch (error) {
        console.error(`Error fetching ${tab}:`, error);
      } finally {
        setLoading(false);
      }
    },
    [setContractVerification],
  );

  useEffect(() => {
    if (!address) return;

    fetchData(currentTab as ITabType, address.address);
  }, [currentTab, address, fetchData]);

  return (
    <div className="mt-6">
      <AddressDetail />
      <div className="flex gap-2 mt-6 flex-wrap">
        {ADDRESSES_BTN_TABS.map((btn, i) => {
          if (address?.type === 'account' && btn.tab === 'accounts') return;
          if (address?.type === 'account' && btn.tab === 'contract') return;
          return (
            <Button
              key={i}
              label={
                (i === btn.label.length - 1 && address?.isVerified) ?
                <div className='flex items-center gap-1'>
                  {btn.label}
                  <CheckIcon />
                </div>
                : btn.label
              }
              onClick={() => changeTab(btn.tab)}
              className={
                currentTab === btn.tab ? 'bg-btn-secondary text-white' : ''
              }
            />
          );
        })}
      </div>

      {(!loading && currentTab !== 'contract') && (
        <AddressesTxsTabsContent
          currentTab={currentTab}
          itxs={itxsByAddress}
          txs={txsByAddress}
          events={eventsByAddress}
          tokens={transferByAddress}
          balances={balancesByAddress}
          tokensByAddress={tokenByAddress}
        />
      )}
      {loading && <TableLoader />}
      {currentTab === 'contract' && !loading && address?.isVerified && (
        <ContractDetail />
      )}
      {currentTab === 'contract' && !loading && !address?.isVerified && (
        <ContractUnverified />
      )}
    </div>
  );
}
