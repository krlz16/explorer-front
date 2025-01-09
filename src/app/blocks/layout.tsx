import Navbar from '@/components/navegations/Navbar'
import { BlocksDataProvider } from '@/context/BlocksContext'
import React from 'react'

export default function layout({ children }: { children: React.ReactNode}) {
  return (
    <BlocksDataProvider>
      <Navbar />
      { children }
    </BlocksDataProvider>
  )
}
