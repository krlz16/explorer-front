'use client'
import SidebarItem from './SidebarItem'
import { AddressIcon, BlockActiveIcon, BlockIcon, HomeActiveIcon, HomeIcon, Logo, TokenIcon, TxIcon } from '@/common/icons'
import { ROUTER } from '@/common/constants'
import { usePathname } from 'next/navigation';

function Sidebar() {
  const pathname = usePathname();
  const isActive = (route:string) => {
    console.log('route: ', route);
    return pathname!.includes(route); 
  };
  const color = {
    [ROUTER.HOME]: "bg-brand-purple",
    [ROUTER.BLOCKS.INDEX]: "bg-brand-green",
    [ROUTER.TXS]: "bg-brand-orange",
    [ROUTER.ADDRESSES]: "bg-brand-pink",
    [ROUTER.TOKENS]: "bg-brand-cyan",
  }
  return (
    <div className='w-[210px] fixed h-screen inset-0 z-50 md:relative'>
      <div className='w-[210px] h-full'>
        <aside className="w-[210px] pt-8 fixed top-0 left-0 h-full border-r border-r-zinc-800">
          <div className="mb-10 ml-6">
            <Logo />
          </div>
          <SidebarItem
            label="Home"
            isActive={pathname === ROUTER.HOME}
            className={color[pathname]}
            link={ROUTER.HOME}
            icon={
              pathname === ROUTER.HOME ?
              <HomeActiveIcon />
              :
              <HomeIcon className='fill-white' />
          }
          />
          <SidebarItem
            label="Blocks"
            isActive={isActive(ROUTER.BLOCKS.INDEX)}
            className="bg-brand-green"
            link={ROUTER.BLOCKS.INDEX}
            icon={
              isActive(ROUTER.BLOCKS.INDEX) ?
              <BlockActiveIcon />
              :
              <BlockIcon />
            }
          />
          <SidebarItem
            label="Transacciones"
            isActive={isActive(ROUTER.TXS)}
            className="bg-brand-orange"
            link={ROUTER.TXS}
            icon={<TxIcon className={isActive(ROUTER.TXS) ? '!fill-black' : 'fill-white-400'} />}
          />
          <SidebarItem
            label="Addresses"
            isActive={isActive(ROUTER.ADDRESSES)}
            className="bg-brand-pink"
            link={ROUTER.ADDRESSES}
            icon={<AddressIcon className={isActive(ROUTER.ADDRESSES) ? '!fill-black' : 'fill-white-400'} />}
          />
          <SidebarItem
            label="Tokens"
            isActive={isActive(ROUTER.TOKENS)}
            className="bg-brand-cyan"
            link={ROUTER.TOKENS}
            icon={<TokenIcon className={isActive(ROUTER.TOKENS) ? '!fill-black' : 'fill-white-400'}  />}
          />
        </aside>
      </div>
    </div>
  )
}

export default Sidebar