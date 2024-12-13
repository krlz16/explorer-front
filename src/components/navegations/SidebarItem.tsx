import Link from 'next/link';

type props = {
  label: string
  link: string
  icon: React.ReactNode,
  className?: string
  isActive: boolean
}

function SidebarItem({ label, link, icon, className, isActive }: props) {
  return (
    <Link
      className={`h-13 text-sm rounded-xl px-3 py-5 flex items-center mx-3 gap-2 font-bold ${isActive ? `${className} text-black` : 'text-white-400 hover:bg-secondary hover:text-white-400'}`}
      href={link}
    >
      { icon }
      { label }
    </Link>
  )
}

export default SidebarItem