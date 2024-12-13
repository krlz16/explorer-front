import { MinerIcon, TxDensityIcon, TxIcon } from '@/common/icons'
import Card from '@/components/generals/Card'
import React from 'react'

function LastBlock() {
  return (
    <Card className='bg-secondary w-full h-50 flex flex-col'>
      <div className='text-lg'>
        Last Block <span className='text-sm text-white-400'>21s ago</span>
      </div>
      <div className='flex flex-1 items-end mb-4'>
        <div>
          <div className='text-[41px] font-medium'>5,858,686</div>
          <div className='flex gap-2 items-center text-white-400'>
            <MinerIcon /> 0x23...3400
            <TxIcon /> 2
            <TxDensityIcon /> 0x23...3400
          </div>
        </div>
      </div>
    </Card>
  )
}

export default LastBlock
