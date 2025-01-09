import { ROUTER } from '@/common/constants';
import { TxIcon } from '@/common/icons';
import { ITxs } from '@/common/interfaces/Txs';
import { parseDecimals } from '@/common/utils/ParseDecimals';
import ToolTip from '@/components/ui/ToolTip';
import Link from 'next/link';
import React from 'react';
import Badge from '../ui/Badge';
import { Table, TableCell, TableHeader, TableRow } from '../ui/Table';

type props = {
  txs: ITxs[] | undefined
}

function TxsTable({ txs }: props) {
  return (
    <Table>
      <TableHeader>
        <TableCell className="w-8 text-center flex-initial" />
        <TableCell>Hash</TableCell>
        <TableCell>Block</TableCell>
        <TableCell>From</TableCell>
        <TableCell>To</TableCell>
        <TableCell>Value</TableCell>
        <TableCell>GasUsed</TableCell>
        <TableCell>Type</TableCell>
        <TableCell>Status</TableCell>
      </TableHeader>
      {
        txs?.map((tx, i) => (
          <TableRow key={i}>
            <TableCell className='!w-8 flex justify-center flex-initial'>
              <TxIcon />
            </TableCell>
            <TableCell className='text-brand-orange'>
              <ToolTip
                text={tx.hash}
                href={`${ROUTER.TXS.INDEX}/${tx.hash}`}
              />
            </TableCell>
            <TableCell>
              <Link href={`${ROUTER.BLOCKS.INDEX}/${tx.blockNumber}`}>{parseDecimals(tx.blockNumber)}</Link>
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
            <TableCell>{tx.value}</TableCell>
            <TableCell>{tx.gasUsed}</TableCell>
            <TableCell>{tx.txType}</TableCell>
            <TableCell>
              {Number(tx.receipt?.status) ? <Badge text="SUCCESSFUL" type="success" /> : <Badge text="FAIL" type="fail" />}
            </TableCell>
          </TableRow>
        ))
      }
    </Table>
  );
}

export default TxsTable;
