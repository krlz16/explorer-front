'use client'
import React from 'react'
import TxsChart from './TxsChart';
import { useHomeDataContext } from '@/context/HomeContext';

export default function TxsChartContainer() {
  const { blocks } = useHomeDataContext();
  if (!blocks) return '';
  return (
    <div className='w-full md:w-1/2' key={blocks[0].number}>
      <TxsChart blocks={blocks} />
    </div>
  )
}
