'use client';
import SidebarItem from './SidebarItem';
import {
  AddressIcon,
  BlockActiveIcon,
  BlockIcon,
  HomeActiveIcon,
  HomeIcon,
  TokenIcon,
  TxIcon,
} from '@/common/icons';
import { ROUTER } from '@/common/constants';
import { usePathname } from 'next/navigation';
import RskLogo from './RskLogo';
import { useEffect } from 'react';
import { useAppDataContext } from '@/context/AppContext';

function Sidebar() {
  const { activeSidebar, setActiveSidebar, setWidthScreen, widthScreen } =
    useAppDataContext();
  const pathname = usePathname();

  const isActive = (route: string) => {
    return pathname!.includes(route);
  };

  useEffect(() => {
    if (!window) return;
    setWidthScreen(window.screen.width);
    window.addEventListener('resize', changeScreen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeScreen = (e: UIEvent) => {
    const target = e.target as Window;
    setWidthScreen(target.innerWidth);
    if (target.innerWidth <= 1000) {
      setActiveSidebar(false);
    } else {
      setActiveSidebar(true);
    }
  };
  const closeSidebar = () => {
    if (widthScreen <= 1000) setActiveSidebar(false);
  };
  return (
    <div
      className={`${activeSidebar ? 'flex' : 'hidden'} fixed md:w-[210px] h-screen inset-0 z-50 md:z-10 md:relative`}
    >
      <div className="w-[210px] h-full bg-primary">
        <aside className="w-[210px] pt-5 fixed top-0 left-0 h-full border-r border-line">
          <RskLogo className="mb-10 ml-6" />
          <SidebarItem
            label="Home"
            isActive={pathname === ROUTER.HOME}
            className="bg-brand-orange"
            link={ROUTER.HOME}
            icon={
              pathname === ROUTER.HOME ? (
                <HomeActiveIcon />
              ) : (
                <HomeIcon className="fill-white" />
              )
            }
          />
          <SidebarItem
            label="Blocks"
            isActive={isActive(ROUTER.BLOCKS.INDEX)}
            className="bg-brand-green"
            link={ROUTER.BLOCKS.INDEX}
            icon={
              isActive(ROUTER.BLOCKS.INDEX) ? (
                <BlockActiveIcon />
              ) : (
                <BlockIcon />
              )
            }
          />
          <SidebarItem
            label="Transactions"
            isActive={isActive(ROUTER.TXS.INDEX)}
            className="bg-brand-purple"
            link={ROUTER.TXS.INDEX}
            icon={
              <TxIcon
                className={
                  isActive(ROUTER.TXS.INDEX) ? '!fill-black' : 'fill-white-400'
                }
              />
            }
          />
          <SidebarItem
            label="Addresses"
            isActive={isActive(ROUTER.ADDRESSES.INDEX)}
            className="bg-brand-pink"
            link={ROUTER.ADDRESSES.INDEX}
            icon={
              <AddressIcon
                className={
                  isActive(ROUTER.ADDRESSES.INDEX)
                    ? '!fill-black'
                    : 'fill-white-400'
                }
              />
            }
          />
          <SidebarItem
            label="Tokens"
            isActive={isActive(ROUTER.TOKENS.INDEX)}
            className="bg-brand-cyan"
            link={ROUTER.TOKENS.INDEX}
            icon={
              <TokenIcon
                className={
                  isActive(ROUTER.TOKENS.INDEX)
                    ? '!fill-black'
                    : 'fill-white-400'
                }
              />
            }
          />
        </aside>
      </div>
      <div
        role="button"
        tabIndex={0}
        onClick={() => closeSidebar()}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') closeSidebar();
        }}
        className="absolute w-screen inset-0 -z-40 bg-black opacity-60 md:hidden"
      ></div>
    </div>
  );
}

export default Sidebar;
