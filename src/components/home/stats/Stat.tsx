import Card from '@/components/generals/Card'
import React from 'react'

type props = {
  title: string
  value: number | string
  description: string
  icon: React.ReactNode
}

function Stat({ value, description, icon, title }: props) {
  return (
    <Card  className="p-4 bg-secondary w-full h-25 rounded-xl flex justify-between items-center">
      <div className="">
        <div className="text-2xl font-medium">
          <span>{value} {title}</span>
        </div>
        <div className="text-white-400 text-sm">{ description }</div>
      </div>
      { icon }
    </Card>
  )
}

export default Stat
