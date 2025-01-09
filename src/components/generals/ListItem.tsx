
type props = {
  title: string
  info?: string
  value: React.ReactNode | string
}
function ListItem({ title, value }: props) {
  return (
    <div className="flex items-center py-3">
      <div className="w-3/12 flex items-center gap-2">
        <div>
          <div className="bg-neutral-800 rounded-xl flex justify-center items-center text-white-100 text-xs w-4 h-4">
            i
          </div>
        </div>
        {title}
      </div>
      <div className="w-9/12 text-white-100 break-words">
        {value}
      </div>
    </div>
  )
}

export default ListItem
