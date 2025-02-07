import { BlockIcon, TxIcon } from '@/common/icons'
import { ITxs } from '@/common/interfaces/Txs'
import Block from '@/components/blocks/Block'
import Badge from '@/components/ui/Badge'
import Date from '@/components/ui/Date'
import Status from '@/components/ui/Status'
import ToolTip from '@/components/ui/ToolTip'
import React from 'react'

type props = {
  tx: ITxs
}
function TxCard({ tx }: props) {
  return (
    <div className="flex p-6 justify-between h-25 shadow-line hover:bg-gray-600 hover:rounded-xl">
      <div className="flex items-center gap-4 flex-1">
        <div className="mr-2">
          <TxIcon />
        </div>
        <div className="font-bold">
          <ToolTip
            className='!text-white-100'
            text={tx.hash}
            showCopy={false}
            type='hash'
          />
          <div className="flex items-center text-sm gap-1 text-brand-orange">
            <BlockIcon className="w-3 h-4" />
            <Block number={tx.blockNumber} />
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="text-sm w-[130px]">
          <div className='flex gap-1 text-brand-orange'>
            <span className='text-white-400'>From:</span>
            <ToolTip
              text={tx.from}
              type='address'
              showCopy={false}
            />
          </div>
          <div className='flex gap-1 text-brand-orange'>
            <span className='text-white-400'>To:</span>
            <ToolTip
              text={tx.to}
              type='address'
              showCopy={false}
            />
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-end">
        <div className='w-32 flex flex-col justify-between'>
          <div className='flex gap-2 text-sm justify-between'>
            <Status type={tx.status} />
            <Date
              date={tx.timestamp}
              mode='timer'
            />
          </div>
          <div className='w-full flex justify-start'>
            <Badge text={tx.txType} type='info' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TxCard
