import { BlockIcon } from '@/common/icons';
import { IBlocks } from '@/common/interfaces/Blocks';
import { parseDecimals } from '@/common/utils/ParseDecimals';
import ToolTip from '../ui/ToolTip';
import Link from 'next/link';
import { ROUTER } from '@/common/constants';
import { parseDate } from '@/common/utils/Time';
import { Table, TableCell, TableHeader, TableRow } from '../ui/Table';

type props = {
  blocks: IBlocks[] | undefined;
};

function BlocksTable({ blocks }: props) {
  return (
    <Table>
      <TableHeader>
        <TableCell className="w-12 flex-initial" />
        <TableCell>Block</TableCell>
        <TableCell>Txs</TableCell>
        <TableCell>Hash</TableCell>
        <TableCell>Miner</TableCell>
        <TableCell>Size</TableCell>
        <TableCell>Timestamp</TableCell>
      </TableHeader>
      {blocks?.map((b, i) => (
        <TableRow key={i}>
          <TableCell className="w-12 flex justify-center flex-initial">
            <BlockIcon />
          </TableCell>
          <TableCell className="text-brand-orange">
            <Link href={`${ROUTER.BLOCKS.INDEX}/${b.number}`}>
              {parseDecimals(b.number)}
            </Link>
          </TableCell>
          <TableCell>{b.transactions}</TableCell>
          <TableCell>
            <ToolTip text={b.hash} />
          </TableCell>
          <TableCell>
            <ToolTip text={b.miner} className="text-brand-orange" />
          </TableCell>
          <TableCell>{b.size}</TableCell>
          <TableCell>{parseDate(b.timestamp).timeAgo}</TableCell>
        </TableRow>
      ))}
    </Table>
  );
}

export default BlocksTable;
