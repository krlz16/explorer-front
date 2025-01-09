import { IEvents } from '@/common/interfaces/IEvents'
import { IInternalTxs, ITxs } from '@/common/interfaces/Txs'
import EventsTable from '@/components/events/EventsTable'
import InternalTxsTable from '@/components/itxs/InternalTxsTable'
import TxsTable from '@/components/txs/TxsTable'
import React from 'react'

type props = {
  currentTap: string
  txs: ITxs[] | undefined
  itxs: IInternalTxs[] | undefined
  events: IEvents[] | undefined
}

const AddressesTxsTabsContent = ({ currentTap, txs, itxs, events }: props) => {
  if (currentTap === "txs") return <TxsTable txs={txs} />;
  if (currentTap === "itxs") return <InternalTxsTable itxs={itxs} />;
  if (currentTap === "events") return <EventsTable events={events} />;
  return null;
}

export default AddressesTxsTabsContent
