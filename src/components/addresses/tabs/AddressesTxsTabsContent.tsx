import { IEvents } from '@/common/interfaces/IEvents'
import { IInternalTxs, ITxs } from '@/common/interfaces/Txs'
import EventsTable from '@/components/events/EventsTable'
import InternalTxsTable from '@/components/itxs/InternalTxsTable'
import TxsTable from '@/components/txs/TxsTable'
import React from 'react'

type props = {
  currentTab: string
  txs: ITxs[] | undefined
  itxs: IInternalTxs[] | undefined
  events: IEvents[] | undefined
}

const AddressesTxsTabsContent = ({ currentTab, txs, itxs, events }: props) => {
  if (currentTab === "txs") return <TxsTable txs={txs} />;
  if (currentTab === "itxs") return <InternalTxsTable itxs={itxs} />;
  if (currentTab === "events") return <EventsTable events={events} />;
  return null;
}

export default AddressesTxsTabsContent
