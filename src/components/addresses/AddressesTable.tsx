import { ROUTER } from '@/common/constants';
import { AddressIcon } from '@/common/icons';
import { IAddresses } from '@/common/interfaces/Addresses';
import { parseDecimals } from '@/common/utils/ParseDecimals';
import ToolTip from '@/components/ui/ToolTip';
import React from 'react';
import { Table, TableCell, TableHeader, TableRow } from '../ui/Table';

type props = {
  addresses: IAddresses[] | undefined
}

function AddressesTable({ addresses }: props) {
  return (
    <Table>
      <TableHeader>
        <TableCell className="w-12 text-center flex-initial" />
        <TableCell>Address</TableCell>
        <TableCell>Balance</TableCell>
        <TableCell>Type</TableCell>
        <TableCell>Updated at block</TableCell>
      </TableHeader>
      {
        addresses?.map((a, i) => (
          <TableRow key={i}>
            <TableCell className='w-12 flex justify-center flex-initial'>
              <AddressIcon />
            </TableCell>
            <TableCell>
              <ToolTip
                text={a.address}
                href={`${ROUTER.ADDRESSES.INDEX}/${a.address}`}
              />
            </TableCell>
            <TableCell>
              {parseDecimals(a?.balance, 4)} RBTC
            </TableCell>
            <TableCell className='text-brand-pink'>
              {a.type}
            </TableCell>
            <TableCell>
              {parseDecimals(a.blockNumber)}
            </TableCell>
          </TableRow>
        ))
      }
    </Table>
  );
}

export default AddressesTable;
