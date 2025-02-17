import { DiscordIcon, GithubIcon, XIcon } from '@/common/icons'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className='w-full md:flex justify-between items-center p-6 bg-primary relative z-40 border-t border-t-line text-sm'>
      <div>
        <div className='flex gap-2 items-center'>
          <span>Built by</span>
          <span className='text-lg font-bold'>RootstockLabs</span>
        </div>
        <div>Copyright &copy; 2024 Roostock Labs. All rights reserved.</div>
      </div>
      <div className='flex gap-2 flex-wrap mt-3'>
        <Link className='hover:underline' href='https://rootstock.io/'>About Rootstock Labs</Link>
        <Link className='hover:underline' href='https://rootstock.io/contact/'>Help</Link>
        <Link className='hover:underline' href='https://rootstock.io/terms-conditions/'>Terms & Conditions</Link>
        <Link className='hover:underline' href='https://dev.rootstock.io/'>Documentation</Link>
      </div>
      <div className='flex gap-4 mt-6'>
        <Link href='https://twitter.com/rootstock_io'><XIcon /></Link>
        <Link href='https://github.com/rsksmart'><GithubIcon /></Link>
        <Link href='https://discord.com/invite/rootstock'><DiscordIcon /></Link>
      </div>
    </footer>
  )
}

export default Footer
