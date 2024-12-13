import React from 'react'

function ToolTip({ text = '' }: { text: string }) {
  if (!text) return ''
  const trim1 = text.substring(0, 4);
  const trim2 = text.substring(text.length - 4);
  return (
    <div className='relative text-center'>
      <div className='flex w-fit'>
        <p>{ trim1 }</p>
        <p>{` ... `}</p>
        <p>{ trim2 }</p>
      </div>
    </div>
  )
}

export default ToolTip