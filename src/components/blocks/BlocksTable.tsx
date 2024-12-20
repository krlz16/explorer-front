import { BlockIcon } from '@/common/icons';
import { IBlocks } from '@/common/interfaces/Blocks';
import { parseDecimals } from '@/common/utils/ParseDecimals';
import ToolTip from '../control/ToolTip';
import Link from 'next/link';
import { ROUTER } from '@/common/constants';
import { parseDate } from '@/common/utils/Time';

type props = {
  blocks: IBlocks[] | undefined
}

function BlocksTable({ blocks }: props) {
  return (
    <div className='w-full mt-6'>
      <div className='w-full bg-secondary rounded-tl-xl rounded-tr-xl flex h-13 p-5'>
        <div className='w-12 text-center'></div>
        <div className='flex-1 text-center'>Block</div>
        <div className='flex-1 text-center'>Txs</div>
        <div className='flex-1 text-center'>Hash</div>
        <div className='flex-1 text-center'>Miner</div>
        <div className='flex-1 text-center'>Size</div>
        <div className='flex-1 text-center'>Timestamp</div>
      </div>
      {
        blocks?.map((b, i) => (
          <div key={i} className='flex h-13 p-5 hover:bg-secondary text-white-400'>
            <div className='w-12 text-center'>
              <BlockIcon />
            </div>
            <div className='flex-1 text-center text-brand-orange'>
              <Link href={`${ROUTER.BLOCKS.INDEX}/${b.number}`}>{parseDecimals(b.number)}</Link>
            </div>
            <div className='flex-1 text-center'>{b.transactions}</div>
            <div className='flex-1 text-center'><ToolTip text={b.hash} /></div>
            <div className='flex-1 text-center'><ToolTip text={b.miner} className='text-brand-orange' /></div>
            <div className='flex-1 text-center'>{b.size}</div>
            <div className='flex-1 text-center'>{parseDate(b.timestamp).timeAgo}</div>
          </div>
        ))
      }
    </div>
  );
}

export default BlocksTable;