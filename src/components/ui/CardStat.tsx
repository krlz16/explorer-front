import React from 'react'

type props = {
  title: string
  subtitle: string
  icon: React.ReactNode
}
function CardStat({ title, subtitle, icon }: props) {
  return (
    <div className='h-20 w-full p-4 rounded-xl bg-secondary flex justify-between items-center'>
      <div>
        <div className='font-bold text-2xl'>{ title }</div>
        <div className='text-sm text-white-400'>{ subtitle }</div>
      </div>
      <div>
        { icon }
      </div>
    </div>
  )
}

export default CardStat
