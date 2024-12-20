'use client'
import { useState } from 'react'

function Navbar() {
  const [focus, setFocus] = useState(false);
  return (
    <div className='w-full mt-5 relative'>
      <input
        className="w-full h-11 rounded-lg bg-secondary text-white px-3 py-2 relative z-50"
        type="text"
        placeholder="Search by Token, block, Symbol, Rns"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      {
        focus && (
          <div className='w-screen h-screen z-40 fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.8)]'></div>
        )
      }
    </div>
  )
}

export default Navbar
