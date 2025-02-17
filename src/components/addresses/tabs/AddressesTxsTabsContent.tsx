import { IBalances } from '@/common/interfaces/Balances';
import { IEvents } from '@/common/interfaces/IEvents';
import { ITokens } from '@/common/interfaces/Tokens';
import { IInternalTxs, ITxs } from '@/common/interfaces/Txs';
import BalancesTable from '@/components/balances/BalancesTable';
import EventsTable from '@/components/events/EventsTable';
import InternalTxsTable from '@/components/itxs/InternalTxsTable';
import TokensTable from '@/components/tokens/TokensTable';
import TokenTransfersTable from '@/components/transfer/TokenTransfersTable';
import TxsTable from '@/components/txs/TxsTable';
import React from 'react';

type props = {
  currentTab: string;
  txs: ITxs[] | undefined;
  itxs: IInternalTxs[] | undefined;
  events: IEvents[] | undefined;
  tokens: IEvents[] | undefined;
  tokensByAddress: ITokens[] | undefined;
  balances: IBalances[] | undefined;
};

const getNoDataMessage = (tab: string) => {
  const messages: Record<string, string> = {
    txs: 'No transactions were found.',
    itxs: 'No internal transactions were found.',
    events: 'No events were found.',
    token_transfer: 'No token transfers were found.',
    balances: 'No balances were found.',
    tokens: 'No tokens were found.',
    account: 'No accounts were found.'
  };
  return messages[tab] || 'No data found.';
};

const AddressesTxsTabsContent = ({
  currentTab,
  txs,
  itxs,
  events,
  tokens,
  balances,
  tokensByAddress
}: props) => {
  if (currentTab === 'txs' && txs?.length) return <TxsTable txs={txs} />;
  if (currentTab === 'itxs' && itxs?.length) return <InternalTxsTable itxs={itxs} />;
  if (currentTab === 'events' && events?.length) return <EventsTable events={events} />;
  if (currentTab === 'token_transfer' && tokens?.length) return <TokenTransfersTable tokens={tokens} />;
  if (currentTab === 'balances' && balances?.length) return <BalancesTable balances={balances} />;
  if (currentTab === 'tokens' && tokensByAddress?.length) return <TokensTable tokens={tokensByAddress} />;

  return <div className='w-full text-center mt-8 text-white-400'>{getNoDataMessage(currentTab)}</div>;
};

export default AddressesTxsTabsContent;
