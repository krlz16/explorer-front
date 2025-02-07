import { PUBLIC_DOMAIN } from '@/common/constants';
import { CloseIcon, Logo, MenuIcon } from '@/common/icons';
import { useAppDataContext } from '@/context/AppContext';

function RskLogo({ className }: { className?: string }) {
  const { activeSidebar, setActiveSidebar } = useAppDataContext();
  return (
    <div className={`${className} flex gap-2`}>
      <button
        onClick={() => setActiveSidebar(!activeSidebar)}
        className="md:hidden"
      >
        {activeSidebar ? <CloseIcon /> : <MenuIcon className="w-6 h-6" />}
      </button>
      <div>
        <Logo />
        <span className="bg-brand-orange rounded-xl block text-xs px-1 w-fit mt-1 font-semibold text-black uppercase">
          {PUBLIC_DOMAIN}
        </span>
      </div>
    </div>
  );
}

export default RskLogo;
