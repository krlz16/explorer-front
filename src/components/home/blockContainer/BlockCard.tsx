import { BlockIcon, TxDensityIcon, TxIcon } from '@/common/icons';
import { IBlocks } from '@/common/interfaces/Blocks';
import ToolTip from '../../ui/ToolTip';
import { parseDecimals } from '@/common/utils/ParseDecimals';
import { parseDate } from '@/common/utils/Time';

type props = {
  block: IBlocks;
};

function BlockCard({ block }: props) {
  return (
    <div className="flex p-6 justify-between h-25 shadow-line hover:bg-secondary hover:rounded-xl">
      <div className="flex items-center gap-4 flex-1">
        <div className="mr-2">
          <BlockIcon />
        </div>
        <div className="w-full text-left flex justify-between">
          <div>
            <div className="font-bold">{parseDecimals(block.number)}</div>
            <div className="flex items-center text-sm gap-1">
              <TxIcon className="w-3 h-4" />
              <ToolTip
                trim={6}
                text={block.hash}
                className="text-brand-orange"
              />
            </div>
          </div>
          <div className="text-sm flex flex-col gap-2 items-center text-white-400 mt-1">
            <div className="flex gap-1 items-center">
              <div>Miner</div>
              <ToolTip
                trim={6}
                text={block.miner}
                className="text-brand-orange"
              />
            </div>
            <div className="flex w-full justify-between gap-2">
              <div className="flex gap-2 items-center">
                <TxIcon className="w-4 h-4" /> {block.transactions}
              </div>
              <span className="border-r border-r-line"></span>
              <div className="flex gap-2 items-center">
                <TxDensityIcon /> {parseDecimals(block.txDensity)} txs/s
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-white-400 text-sm">
              {parseDate(block.timestamp).timeAgo}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockCard;
