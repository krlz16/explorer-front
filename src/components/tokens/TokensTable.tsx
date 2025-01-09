import { TokenIcon } from '@/common/icons';
import { ITokens } from '@/common/interfaces/Tokens';
import ToolTip from '@/components/ui/ToolTip';
import React from 'react';
import { Table, TableCell, TableHeader, TableRow } from '../ui/Table';

type props = {
  tokens: ITokens[] | undefined
}

function TokensTable({ tokens }: props) {
  return (
    <Table>
      <TableHeader>
        <TableCell className="w-12 flex-initial" />
        <TableCell>Name</TableCell>
        <TableCell>Balance</TableCell>
        <TableCell>Address</TableCell>
        <TableCell>Created</TableCell>
      </TableHeader>
      {
        tokens?.map((tk, i) => (
          <TableRow key={i}>
            <TableCell className='w-12 flex justify-center flex-initial'>
              <TokenIcon />
            </TableCell>
            <TableCell>{tk.addressInfo.name}</TableCell>
            <TableCell>{tk.balance}</TableCell>
            <TableCell>
              <ToolTip text={tk.address} />
            </TableCell>
            <TableCell>{tk.blockNumber}</TableCell>
          </TableRow>
        ))
      }
    </Table>
  );
}

export default TokensTable;
