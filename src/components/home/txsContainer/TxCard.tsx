import { BlockIcon, TxIcon } from '@/common/icons'
import { ITxs } from '@/common/interfaces/Txs'
import { parseDecimals } from '@/common/utils/ParseDecimals'
import { parseDate } from '@/common/utils/Time'
import ToolTip from '@/components/control/ToolTip'
import React from 'react'

type props = {
  tx: ITxs
}
function TxCard({ tx }: props) {
  return (
    <div className="flex p-6 justify-between h-25 shadow-line hover:bg-secondary hover:rounded-xl">
      <div className="flex items-center gap-4 flex-1">
        <div className="mr-2">
          <TxIcon />
        </div>
        <div className="w-full text-left flex justify-between">
          <div>
            <div className="font-bold">
              <ToolTip text={ tx.hash } />
            </div>
            <div className="flex items-center text-sm gap-1 text-white-400">
              <BlockIcon className="w-3 h-4" />
              { parseDecimals(tx.blockNumber)}
            </div>
          </div>
          <div className="text-sm text-white-400 mt-1">
            <div className='flex gap-1'>Trom: <ToolTip text={ tx.from } className='text-brand-orange' /></div>
            <div className='flex gap-1'>To: <ToolTip text={ tx.to } className='text-brand-orange' /></div>
          </div>
          <div className="flex flex-col justify-between">
            <div className='flex gap-2 text-sm'>
              <div className='rounded-md bg-success text-success px-1'>Success</div>
              <div className="text-white-400 text-sm">{ parseDate(tx.timestamp).timeAgo }</div>
            </div>
            <div className='w-full flex justify-start'>
              <div className='bg-gray-600 rounded-full px-2 text-white-400 text-sm'>{tx.txType}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TxCard
