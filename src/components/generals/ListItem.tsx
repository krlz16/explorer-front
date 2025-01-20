import { InfoIcon } from "@/common/icons"
import ToolTip from "../ui/ToolTip"

type props = {
  title: string
  info?: string
  value?: React.ReactNode | string
  className?: string
  type?: 'tooltip' | 'normal'
  text?: string
  trim?: number
}
function ListItem({ title, value, className, type = 'normal', text, trim = 0 }: props) {
  if (!value) return
  return (
    <div className="flex items-center py-3">
      <div className="w-3/12 flex items-center gap-2">
        <div>
          <InfoIcon />
        </div>
        {title}
      </div>
      <div className={`w-9/12 text-white-100 break-words ${className}`}>
        { type === 'tooltip' && (
          <ToolTip
            text={value as string || text} trim={trim} 
          />)
        }
        { type === 'normal' && value}
      </div>
    </div>
  )
}

export default ListItem
