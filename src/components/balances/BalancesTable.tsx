import React from 'react';
import { Table, TableCell, TableHeader, TableRow } from '../ui/Table';
import { IBalances } from '@/common/interfaces/Balances';
import { parseDecimals } from '@/common/utils/ParseDecimals';
import { BitcoinIcon } from '@/common/icons';
import Block from '../blocks/Block';
import { parseDate } from '@/common/utils/Time';

type props = {
  balances: IBalances[] | undefined;
};
function BalancesTable({ balances }: props) {
  return (
    <Table>
      <TableHeader>
        <TableCell>Balance</TableCell>
        <TableCell>Timestamp</TableCell>
        <TableCell>Block</TableCell>
      </TableHeader>
      {balances?.map((b, i) => (
        <TableRow key={i}>
          <TableCell className="gap-2">
            <BitcoinIcon />
            {`${parseDecimals(b.balance, 4)} RBTC`}
          </TableCell>
          <TableCell className="flex justify-center">
            <div className="flex flex-col">
              {(() => {
                const { timeAgo, formattedDate } = parseDate(b.timestamp);
                return (
                  <>
                    <span>{timeAgo}</span>
                    <span>{formattedDate}</span>
                  </>
                );
              })()}
            </div>
          </TableCell>
          <TableCell className="text-brand-pink">
            <Block number={b.blockNumber} />
          </TableCell>
        </TableRow>
      ))}
    </Table>
  );
}

export default BalancesTable;
