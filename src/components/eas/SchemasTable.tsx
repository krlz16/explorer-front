import React from 'react';
import { Table, TableCell, TableHeader, TableRow } from '../ui/Table';
import { ISchemas } from '@/common/interfaces/Attestations';
import ToolTip from '../ui/ToolTip';

type props = {
  schemas: ISchemas | undefined
}

function SchemasTable({ schemas }: props) {     
  return (
    <Table>
      <TableHeader>
        <TableCell>#</TableCell>
        <TableCell>UID</TableCell>
        <TableCell>Schema</TableCell>
        <TableCell>Resolver</TableCell>
        <TableCell>Attestations</TableCell>
      </TableHeader>
      {        
        schemas?.schemata?.map((s, i) => (
          <TableRow key={i}>
            <TableCell>                
                {s.index}                
            </TableCell>
            <TableCell>
                <ToolTip text={s.id} />
            </TableCell>
            <TableCell>                
                {s.schema}
            </TableCell>
            <TableCell>
                <ToolTip
                    text={s.resolver}
                />
            </TableCell>
            <TableCell>                
                {s._count.attestations}                
            </TableCell>            
          </TableRow>
        ))
      }
    </Table>
  );
}

export default SchemasTable;
