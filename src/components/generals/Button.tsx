'use cleint'

type props = {
  className?: string
  label: string
  icon?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

function Button({ onClick, className, label, icon }:props) {
  return (
    <button className={`${className} hover:bg-gray-700 hover:text-white hover:border-transparent text-sm h-10 px-6 max-h-fit border border-white-400 rounded-xl flex items-center justify-center gap-3`}
      onClick={onClick}
    >
      {icon}
      {label}
    </button>
  )
}

export default Button
