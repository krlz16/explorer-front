import { BlockIcon, BtcIcon, TxIcon } from '@/common/icons'
import { ITxs } from '@/common/interfaces/Txs'
import ToolTip from '@/components/control/ToolTip'
import React from 'react'

type props = {
  tx: ITxs
}
function TxCard({ tx }: props) {
  return (
    <div className="w-full h-25 hover:bg-secondary hover:rounded-xl shadow-line p-6 flex">
      <div className="flex items-center gap-4 flex-1">
        <div>
          <div className='w-10 h-10 rounded-full bg-[#252525] flex justify-center items-center'>
            <TxIcon />
          </div>
        </div>
        <div className="flex gap-4 text-white-400">
          <div className="">
            <div className="text-sm text-white-100 font-semibold flex justify-start">
              <ToolTip text={tx.hash} />
            </div>
            <div className="flex items-center gap-2 mt-1">
              <BlockIcon className="w-4 h-4" />
              {tx.blockNumber}
            </div>
          </div>
          <div>
            <div className="h-6 max-w-min bg-secondary rounded-full text-xs flex justify-center items-center px-1 gap-1">
              <BtcIcon />
              { `0.00000` }
              <span>RBTC</span>
            </div>
            <div className="flex gap-2">
              <ToolTip text={tx.from} />
              {`->`}
              <ToolTip text={tx.to} />
            </div>
          </div>
        </div>
      </div>
      <div className="text-white-400 text-sm">
        <div>1m ago</div>
      </div>
    </div>
  )
}

export default TxCard
