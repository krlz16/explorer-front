import React from 'react'

type props = {
  children: React.ReactNode
  className?: string
}
function ListContent({ children, className }: props) {
  return (
    <div className={`text-white-400 bg-secondary rounded-lg p-4 mb-4 ${className}`}>
      {children}
    </div>
  )
}

export default ListContent
