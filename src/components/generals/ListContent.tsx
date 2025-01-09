import React from 'react'

type props = {
  children: React.ReactNode
  className?: string
}
function ListContent({ children, className }: props) {
  return (
    <div className={`mt-10 text-white-400 ${className}`}>
      {children}
    </div>
  )
}

export default ListContent
