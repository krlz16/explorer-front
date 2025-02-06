import { ITokens } from '@/common/interfaces/Tokens';
import ToolTip from '@/components/ui/ToolTip';
import React from 'react';
import { Table, TableCell, TableHeader, TableRow } from '../ui/Table';
import { parseDecimals } from '@/common/utils/ParseDecimals';
import { ROUTER } from '@/common/constants';

type props = {
  tokens: ITokens[] | undefined
}

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
      {
        tokens?.map((tk, i) => (
          <TableRow key={i}>
            <TableCell>{tk.name}</TableCell>
            <TableCell>{tk.symbol}</TableCell>
            <TableCell>
              <ToolTip text={tk.address} href={`${ROUTER.ADDRESSES.INDEX}/${tk.address}`} />
            </TableCell>
            <TableCell>{`${tk.balance} RBTC`}</TableCell>
            <TableCell>{parseDecimals(tk.blockNumber)}</TableCell>
          </TableRow>
        ))
      }
    </Table>
  );
}

export default TokensTable;
