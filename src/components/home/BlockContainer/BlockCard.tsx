import { BlockIcon, MinerIcon, TxDensityIcon, TxIcon } from "@/common/icons"
import { IBlocks } from "@/common/interfaces/Blocks"
import ToolTip from "../../control/ToolTip"
import { timeAgo } from "@/common/utils/Time"

type props = {
  block: IBlocks
}

function BlockCard({ block }: props) {
  return (
    <div className="flex p-6 justify-between h-25 shadow-line hover:bg-secondary hover:rounded-xl">
      <div className="flex items-center gap-4 flex-1">
        <div>
          <div className='w-10 h-10 rounded-full bg-[#252525] flex justify-center items-center'>
            <BlockIcon />
          </div>
        </div>
        <div className="w-full text-left">
          <div className="text-2xl">{ block.number }</div>
          <div className="text-sm flex gap-2 items-center text-white-400 mt-1">
            <MinerIcon />
            <ToolTip text={block.hash} />
            <TxIcon className="w-3 h-4" />
            <div>{ block.transactions }</div>
            <TxDensityIcon />
            <div>0.25 txs/s</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="text-white-400 text-sm">{ timeAgo(block.timestamp) } ago</div>
      </div>
    </div>
  )
}

export default BlockCard
