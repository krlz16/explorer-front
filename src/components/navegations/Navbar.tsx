import React from 'react'

function Navbar() {
  return (
    <div className='w-full mt-5'>
      <input
        className="w-[500px] h-10 rounded-full bg-primary text-white border border-zinc-600 px-3 py-2"
        type="text"
        placeholder="Search by Token, block, Symbol, Rns"
      />
    </div>
  )
}

export default Navbar
