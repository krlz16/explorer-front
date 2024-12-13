
type props = {
  title: string
  value: string
  description: string
  icon: React.ReactNode
}

function CardInfo({ value, title, description, icon }:props) {
  return (
    <div className="p-4 bg-secondary w-full h-25 rounded-xl flex justify-between items-center">
      <div className="">
        <div className="text-2xl font-medium">
          <span>{value}</span>
          <span>{title}</span>
        </div>
        <div className="text-white-400 text-sm">{ description }</div>
      </div>
      { icon }
    </div>
  )
}

export default CardInfo
