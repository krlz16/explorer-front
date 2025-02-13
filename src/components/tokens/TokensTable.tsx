import { ITokens } from '@/common/interfaces/Tokens';
import ToolTip from '@/components/ui/ToolTip';
import React from 'react';
import { Table, TableCell, TableHeader, TableRow } from '../ui/Table';
import Link from 'next/link';
import { ROUTER } from '@/common/constants';
import Block from '../blocks/Block';

type props = {
  tokens: ITokens[] | undefined;
};

function TokensTable({ tokens }: props) {
  return (
    <Table>
      <TableHeader>
        <TableCell>Name</TableCell>
        <TableCell>Symbol</TableCell>
        <TableCell>Address</TableCell>
        <TableCell>Balance</TableCell>
        <TableCell>Updated at block</TableCell>
      </TableHeader>
      {tokens?.map((tk, i) => (
        <TableRow key={i}>
          <TableCell className="text-brand-cyan">
            <Link href={`${ROUTER.ADDRESSES.INDEX}/${tk.address}`}>
              {tk.name || `(Not Provided)`}
            </Link>
          </TableCell>
          <TableCell>{tk.symbol || `(Not Provided)`}</TableCell>
          <TableCell>
            <ToolTip text={tk.address} type="address" />
          </TableCell>
          <TableCell>{`${tk.balance} RBTC`}</TableCell>
          <TableCell>
            <Block number={tk.blockNumber} />
          </TableCell>
        </TableRow>
      ))}
    </Table>
  );
}

export default TokensTable;
