import { ROUTER } from '@/common/constants';
import { ITxs } from '@/common/interfaces/Txs';
import { parseDecimals } from '@/common/utils/ParseDecimals';
import ToolTip from '@/components/ui/ToolTip';
import Link from 'next/link';
import React from 'react';
import { Table, TableCell, TableHeader, TableRow } from '../ui/Table';
import { parseDate } from '@/common/utils/Time';
import Status from '../ui/Status';

type props = {
  txs: ITxs[] | undefined
}

function TxsTable({ txs }: props) {
  return (
    <Table>
      <TableHeader>
        <TableCell>Hash</TableCell>
        <TableCell>Status</TableCell>
        <TableCell>Block</TableCell>
        <TableCell>Ago</TableCell>
        <TableCell>From</TableCell>
        <TableCell>To</TableCell>
        <TableCell>Value</TableCell>
        <TableCell>GasUsed</TableCell>
        {/* <TableCell>Type</TableCell> */}
      </TableHeader>
      {
        txs?.map((tx, i) => (
          <TableRow key={i}>
            <TableCell>
              <ToolTip
                text={tx.hash}
                href={`${ROUTER.TXS.INDEX}/${tx.hash}`}
              />
            </TableCell>
            <TableCell>
              <Status value={Number(tx.receipt?.status)} />
            </TableCell>
            <TableCell>
              <Link href={`${ROUTER.BLOCKS.INDEX}/${tx.blockNumber}`}>
                {parseDecimals(tx.blockNumber)}
              </Link>
            </TableCell>
            <TableCell>
              { parseDate(tx.timestamp).timeAgo }
            </TableCell>
            <TableCell>
              <ToolTip
                text={tx.from}
                href={`${ROUTER.ADDRESSES.INDEX}/${tx.from}`}
              />
            </TableCell>
            <TableCell>
              <ToolTip
                text={tx.to}
                href={`${ROUTER.ADDRESSES.INDEX}/${tx.to}`}
              />
            </TableCell>
            <TableCell>{`${parseDecimals(tx.value, 6)} RBTC`}</TableCell>
            <TableCell>{parseDecimals(tx.gasUsed)}</TableCell>
            {/* <TableCell>{tx.txType}</TableCell> */}
          </TableRow>
        ))
      }
    </Table>
  );
}

export default TxsTable;
