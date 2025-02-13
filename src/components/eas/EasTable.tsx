import React from 'react';
import { Table, TableCell, TableHeader, TableRow } from '../ui/Table';
import { IAttestations } from '@/common/interfaces/Attestations';
import ToolTip from '../ui/ToolTip';

type props = {
  attestations: IAttestations | undefined
}

function AttestationsTable({ attestations }: props) {     
  return (
    <Table>
      <TableHeader>
        <TableCell>UID</TableCell>
        <TableCell>Schema</TableCell>
        <TableCell>From</TableCell>
        <TableCell>To</TableCell>
        <TableCell>Type</TableCell>
        <TableCell>Age</TableCell>
      </TableHeader>
      {        
        attestations?.attestations?.map((at, i) => (
          <TableRow key={i}>
            <TableCell>
                <ToolTip
                    text={at.id}
                />
            </TableCell>
            <TableCell>{"#" + at.schema?.index + " - "}{at.schema?.schemaNames?.[0]?.name ?? ""}</TableCell>
            <TableCell>
                <ToolTip
                    text={at.attester}
                />
            </TableCell>
            <TableCell>
                <ToolTip
                    text={at.recipient}
                />
            </TableCell>
            <TableCell>{at.isOffchain ? 'OFFCHAIN' : 'ONCHAIN'}</TableCell>       
            <TableCell>{at.timeCreated}</TableCell>
          </TableRow>
        ))
      }
    </Table>
  );
}

export default AttestationsTable;
