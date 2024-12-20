'use client'
import { MinerIcon, TxDensityIcon, TxIcon } from '@/common/icons'
import { parseDecimals } from '@/common/utils/ParseDecimals';
import ToolTip from '@/components/control/ToolTip';
import Card from '@/components/generals/Card'
import { useHomeDataContext } from '@/context/HomeContext';
import React from 'react'

function LastBlock() {
  const { lastBlock: block } = useHomeDataContext();

  if (!block) return <Card className='bg-secondary w-1/2 h-50 flex flex-col animate-pulse'>
    <div className='text-lg flex gap-2 items-center'>
      <div className='w-20 h-4 bg-zinc-800 rounded-xl'></div>
      <div className='w-10 h-3 bg-zinc-800 rounded-xl'></div>
    </div>
    <div className='flex flex-1 items-end mb-4'>
      <div>
        <div className='w-28 h-5 bg-zinc-800 rounded-xl mb-6'></div>
        <div className='flex gap-3 items-center text-white-400'>
          <div className='w-16 h-3 bg-zinc-800 rounded-xl'></div>
          <div className='w-16 h-3 bg-zinc-800 rounded-xl'></div>
          <div className='w-16 h-3 bg-zinc-800 rounded-xl'></div>
          <div className='w-16 h-3 bg-zinc-800 rounded-xl'></div>
        </div>
      </div>
    </div>
  </Card>
  return (
    <Card className='bg-secondary w-1/2 h-50 flex flex-col'>
      <div className='text-lg'>
        Last Block <span className='text-sm text-white-400'>21s ago</span>
      </div>
      <div className='flex flex-1 items-end mb-4'>
        <div>
          <div className='text-[41px] font-medium'>{ parseDecimals(block?.number) }</div>
          <div className='flex gap-3 items-center text-white-400'>
            <MinerIcon /> <ToolTip text={block?.miner} />
            <TxIcon /> { block?.transactions }
            <TxDensityIcon /> { parseDecimals(block?.txDensity) }
          </div>
        </div>
      </div>
    </Card>
  )
}

export default LastBlock
