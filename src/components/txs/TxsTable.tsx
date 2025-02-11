import { ITxs } from '@/common/interfaces/Txs';
import { parseDecimals } from '@/common/utils/ParseDecimals';
import ToolTip from '@/components/ui/ToolTip';
import React from 'react';
import { Table, TableCell, TableHeader, TableRow } from '../ui/Table';
import { parseDate } from '@/common/utils/Time';
import Status from '../ui/Status';
import Block from '../blocks/Block';

type props = {
  txs: ITxs[] | undefined;
};

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
      </TableHeader>
      {txs?.map((tx, i) => (
        <TableRow key={i}>
          <TableCell>
            <ToolTip text={tx.hash} type="hash" />
          </TableCell>
          <TableCell>
            <Status type={tx.status} />
          </TableCell>
          <TableCell>
            <Block number={tx.blockNumber} />
          </TableCell>
          <TableCell>{parseDate(tx.timestamp).timeAgo}</TableCell>
          <TableCell>
            <ToolTip text={tx.from} type="address" />
          </TableCell>
          <TableCell>
            <ToolTip text={tx.to} type="address" />
          </TableCell>
          <TableCell>{`${parseDecimals(tx.value, 6)} RBTC`}</TableCell>
          <TableCell>{parseDecimals(tx.gasUsed)}</TableCell>
        </TableRow>
      ))}
    </Table>
  );
}

export default TxsTable;
