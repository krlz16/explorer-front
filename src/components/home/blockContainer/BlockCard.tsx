import { BlockIcon, TxIcon } from '@/common/icons';
import { IBlocks } from '@/common/interfaces/Blocks';
import ToolTip from '../../ui/ToolTip';
import { parseDecimals } from '@/common/utils/ParseDecimals';
import Date from '@/components/ui/Date';
import Block from '@/components/blocks/Block';

type props = {
  block: IBlocks;
};

function BlockCard({ block }: props) {
  return (
    <div className="flex p-6 justify-between h-25 shadow-line hover:bg-gray-600 hover:rounded-xl">
      <div className="flex items-center gap-4 flex-1">
        <div className="mr-2">
          <BlockIcon />
        </div>
        <div>
          <div className="font-bold">
            <Block number={block.number} />
          </div>
          <div className="flex items-center text-sm gap-1">
            <TxIcon className="w-3 h-4" />
            <ToolTip
              text={block.hash}
              type="block"
              showCopy={false}
              className="text-brand-orange"
            />
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="w-[140px] text-white-400">
          <div className="flex gap-1 items-center">
            <div>Miner</div>
            <ToolTip
              className="text-brand-orange"
              text={block.miner}
              showCopy={false}
              type="address"
            />
          </div>
          <div className="flex w-full justify-between gap-2 items-center">
            <div>{`${block.transactions} txns`}</div>
            <span className="border-r-2 h-4 border-r-line"></span>
            <div>{`${parseDecimals(block.txDensity)} txs/s`}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end flex-1">
        <div className="text-white-400 text-sm">
          <Date date={block.timestamp} mode="timer" />
        </div>
      </div>
    </div>
  );
}

export default BlockCard;
