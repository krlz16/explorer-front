import React, { ReactNode } from 'react'

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* <h1 className="font-bold text-3xl flex gap-3 items-center mt-10">
        <AddressIcon />
        Addresses
      </h1> */}
      { children }
    </div>
  )
}
