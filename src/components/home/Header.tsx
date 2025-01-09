import React from 'react'
import Button from '../ui/Button'
import Navbar from '../navegations/Navbar'

function Header() {
  return (
    <header className="mt-5 w-full">
      <div className="w-full flex justify-end">
        <Button label="Testnet"></Button>
      </div>
      <h1 className="text-[36px] leading-9 font-bold">Roostock Mainnet Explorer</h1>
      <Navbar />
    </header>
  )
}

export default Header
