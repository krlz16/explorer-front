import { IAddresses } from '@/common/interfaces/Addresses';
import { parseDecimals } from '@/common/utils/ParseDecimals';
import ToolTip from '@/components/ui/ToolTip';
import React from 'react';
import { Table, TableCell, TableHeader, TableRow } from '../ui/Table';
import Block from '../blocks/Block';

type props = {
  addresses: IAddresses[] | undefined;
};

function AddressesTable({ addresses }: props) {
  return (
    <Table>
      <TableHeader>
        <TableCell>Address</TableCell>
        <TableCell>Balance</TableCell>
        <TableCell>Type</TableCell>
        <TableCell>Updated at block</TableCell>
      </TableHeader>
      {addresses?.map((a, i) => (
        <TableRow key={i}>
          <TableCell>
            <ToolTip text={a.address} type="address" />
          </TableCell>
          <TableCell>{parseDecimals(a?.balance, 4)} RBTC</TableCell>
          <TableCell className="text-brand-pink">{a.type}</TableCell>
          <TableCell>
            <Block number={a.blockNumber} />
          </TableCell>
        </TableRow>
      ))}
    </Table>
  );
}

export default AddressesTable;
