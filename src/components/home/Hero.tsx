import React from 'react'
import Button from '../ui/Button'
import Navbar from '../navegations/Navbar'

function Hero() {
  return (
    <div className="mt-5 w-full">
      <div className="w-full flex justify-end">
        <Button label="Testnet" type='outline'></Button>
      </div>
      <h1 className="text-[36px] leading-9 font-bold">Rootstock Mainnet Explorer</h1>
      <Navbar />
    </div>
  )
}

export default Hero
