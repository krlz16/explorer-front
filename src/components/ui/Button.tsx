'use cleint'

type props = {
  className?: string
  label?: string
  icon?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: 'primary' | 'secondary'
  disabled?: boolean
}

function Button({ onClick, className, label, icon, type = 'primary', disabled = false }:props) {
  const BTN_TYPE = {
    primary: 'px-6 border border-white-400 hover:bg-gray-700 hover:text-white',
    secondary: 'px-4 bg-btn-secondary hover:bg-gray-700 disabled:cursor-not-allowed disabled:hover:bg-btn-secondary text-gray-400 hover:text-gray-400'
  }
  return (
    <button className={`${className} ${BTN_TYPE[type]} hover:border-transparent text-sm h-10 max-h-fit rounded-xl flex items-center justify-center gap-3`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {label}
    </button>
  )
}

export default Button
