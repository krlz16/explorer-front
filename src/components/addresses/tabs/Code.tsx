import Card from '@/components/ui/Card'
import React from 'react'

function Code({ code }: { code: string | undefined }) {
  return (
    <Card pd="p3" className="w-fit h-40 text-xs text-white-400 bg-primary break-all overflow-y-scroll">
      { code }
    </Card>
  )
}

export default Code
