import { fetchData } from '@/app/lib/data'
import { ROUTER } from '@/common/constants'
import React from 'react'
import TxsChart from './TxsChart';
import { IBlocks } from '@/common/interfaces/Blocks';

export default async function TxsChartContainer() {
  const params = {
    take_data: 10
  }
  const response = await fetchData<IBlocks[]>(ROUTER.BLOCKS.INDEX, params, 1); 
  return (
    <div className='w-1/2'>
      <TxsChart blocks={response?.data} />
    </div>
  )
}
