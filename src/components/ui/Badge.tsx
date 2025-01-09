import React from 'react'

type props = {
  text: string
  type: 'success' | 'fail'
}

function Badge({ text, type }: props) {
  const TYPE = {
    'success': 'bg-success text-success',
    'fail': 'bg-fail text-fail'
  }
  return (
    <span className={`rounded-md px-1 ${TYPE[type]}`}>
      {text}
    </span>
  )
}

export default Badge
