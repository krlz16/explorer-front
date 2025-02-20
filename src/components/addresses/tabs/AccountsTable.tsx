import ToolTip from '@/components/ui/ToolTip';
import React from 'react';
import { Table, TableCell, TableHeader, TableRow } from '@/components/ui/Table';
import { ITokens } from '@/common/interfaces/Tokens';

type props = {
  accountsByAddress: ITokens[] | undefined;
};

function AccountsByAddressTable({ accountsByAddress }: props) {
  return (
    <Table>
      <TableHeader>
        <TableCell>Address</TableCell>
        <TableCell>Balance</TableCell>
        <TableCell>Symbol</TableCell>
      </TableHeader>
      {accountsByAddress?.map((tk, i) => (
        <TableRow key={i}>
          <TableCell>
            <ToolTip text={tk.address} type="address" />
          </TableCell>
          <TableCell>{`${tk.balance}`}</TableCell>
          <TableCell>{tk.symbol}</TableCell>
        </TableRow>
      ))}
    </Table>
  );
}

export default AccountsByAddressTable;
