import { IEvents } from '@/common/interfaces/IEvents'
import React from 'react'
import ToolTip from '../ui/ToolTip'
import { ROUTER } from '@/common/constants'
import { parseDecimals } from '@/common/utils/ParseDecimals'
import { TxIcon } from '@/common/icons'
import Link from 'next/link'
import { parseDate } from '@/common/utils/Time'
import { Table, TableCell, TableHeader, TableRow } from '../ui/Table'

type props = {
  events: IEvents[] | undefined
}
function EventsTable({ events }: props) {
  return (
    <Table>
      <TableHeader>
        <TableCell className="w-12 text-center" />
        <TableCell>Event</TableCell>
        <TableCell>Address</TableCell>
        <TableCell>Arguments</TableCell>
        <TableCell>Timestamp</TableCell>
        <TableCell>Block</TableCell>
      </TableHeader>
        {
          events?.map((e, i) => (
            <TableRow key={i} >
              <TableCell className='w-12 text-center'>
                <TxIcon />
              </TableCell>
              <TableCell>
                {e.event}
              </TableCell>
              <TableCell>
                <ToolTip text={e.address} href={`${ROUTER.ADDRESSES.INDEX}/${e.address}`} />
              </TableCell>
              <TableCell>
                <Link href={`${ROUTER.BLOCKS.INDEX}/${e.blockNumber}`}>
                  {parseDecimals(e.blockNumber)}
                </Link>
              </TableCell>
              <TableCell>
                {parseDate(e.timestamp).timeAgo}
              </TableCell>
              <TableCell>
                <Link href={`${ROUTER.BLOCKS.INDEX}/${e.blockNumber}`}>
                  {parseDecimals(e.blockNumber)}
                </Link>
              </TableCell>
            </TableRow>
          ))
        }
    </Table>
  )
}

export default EventsTable
