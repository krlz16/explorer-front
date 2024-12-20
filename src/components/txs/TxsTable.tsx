import { ROUTER } from '@/common/constants';
import { TxIcon } from '@/common/icons';
import { ITxs } from '@/common/interfaces/Txs';
import { parseDecimals } from '@/common/utils/ParseDecimals';
import ToolTip from '@/components/control/ToolTip';
import Link from 'next/link';
import React from 'react';

type props = {
  txs: ITxs[] | undefined
}

function TxsTable({ txs }: props) {
  return (
    <div className='w-full mt-6'>
      <div className='w-full bg-secondary rounded-tl-xl rounded-tr-xl flex h-13 p-5'>
        <div className='w-12 text-center'></div>
        <div className='flex-1 text-center'>Hash</div>
        <div className='flex-1 text-center'>Block</div>
        <div className='flex-1 text-center'>From</div>
        <div className='flex-1 text-center'>To</div>
        <div className='flex-1 text-center'>Value</div>
        <div className='flex-1 text-center'>GasUsed</div>
        <div className='flex-1 text-center'>Type</div>
        <div className='flex-1 text-center'>Status</div>
      </div>
        {
          txs?.map((tx, i) => (
            <div key={i} className='flex h-13 p-5 hover:bg-secondary text-white-400'>
              <div className='w-12 text-center'>
                <TxIcon />
              </div>
              <div className='flex-1 text-center text-brand-orange'>
                <ToolTip
                  text={tx.hash}
                  href={`${ROUTER.TXS}/${tx.hash}`}
                />
              </div>
              <div className='flex-1 text-center'>
                <Link href={`${ROUTER.BLOCKS.INDEX}/${tx.blockNumber}`}>{parseDecimals(tx.blockNumber)}</Link>
              </div>
              <div className='flex-1 text-center'>
                <ToolTip
                  text={tx.from}
                  href={`${ROUTER.ADDRESSES}/${tx.from}`}
                />
              </div>
              <div className='flex-1 text-center'>
                <ToolTip
                  text={tx.to}
                  href={`${ROUTER.ADDRESSES}/${tx.to}`}
                />
              </div>
              <div className='flex-1 text-center'>{tx.value}</div>
              <div className='flex-1 text-center'>{tx.gasUsed}</div>
              <div className='flex-1 text-center'>{tx.txType}</div>
              <div className='flex-1 text-center'>{tx.value}</div>
            </div>

          ))
        }
        {
          txs?.length === 0 && (
            <div className='w-full flex justify-center mt-10'>
              <span className='text-6xl italic text-gray-700'>No Txs</span>
            </div>
          )
        }
    </div>
  )
}

export default TxsTable
