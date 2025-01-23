import Code from '@/components/ui/Code';
import { useAddressDataContext } from '@/context/AddressContext';
import React from 'react'

function ContractCode() {
  const { contractDetail: contract } = useAddressDataContext();
  return (
    <div>
      <div>Contract Source Code</div>
      {
        contract?.request.imports.map((x, i) => (
          <div key={i}>{x.file}</div>
        ))
      }
      <div>
        <Code
          height='h-52'
          code={contract?.request.imports[0].contents}
        />
      </div>
    </div>
  )
}

export default ContractCode
