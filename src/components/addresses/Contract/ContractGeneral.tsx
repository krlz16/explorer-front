import React, { useState } from 'react'
import ContractCode from './ContractCode'
import ContractABI from './ContractABI'
import ByteCode from './ByteCode'
import ListContent from '@/components/generals/ListContent'
import ListItem from '@/components/generals/ListItem'
import { CheckIcon } from '@/common/icons'
import { useAddressDataContext } from '@/context/AddressContext'
import Button from '@/components/ui/Button'
import Date from '@/components/ui/Date'

type ISubtab = 'code' | 'abi' | 'bytecode';

function ContractGeneral() {
  const { address, contractVerification: contract } = useAddressDataContext();
  const optimizer = contract?.request.settings.optimizer;
  const [subTab, setSubTab] = useState<ISubtab>('code');

  return (
    <div>
      <div className='w-full mt-4'>
        <div className='flex items-center gap-1'><CheckIcon />Contract Source Code Verified (Exact Match)</div>
        <ListContent className='!p-0 flex !mb-0 mt-4'>
          <ListItem
            className='flex-1'
            title='Contract Name:'
            value={address?.name}
            type='simple'
          />
          <ListItem
            title='Verification Date:'
            value={<Date date={contract?.timestamp} />}
            type='simple'
          />
        </ListContent>
        <ListContent className='!p-0 flex !mb-0'>
          <ListItem
            className='flex-1'
            title='Optimization:'
            value={`${optimizer?.enabled} with ${optimizer?.runs} runs`}
            type='simple'
          />
          <ListItem
            title='Compiler Version:'
            value={contract?.request.version}
            type='simple'
          />
        </ListContent>
        <ListContent className='!p-0 flex w-1/2'>
          <ListItem
            title='EVM Version'
            value={contract?.request.settings.evmVersion}
            type='simple'
          />
        </ListContent>
      </div>
      <div className='flex gap-2'>
        <Button
          label='Code'
          className='bg-btn-secondary'
          onClick={() => setSubTab('code')}
          type='small'
        />
        <Button
          label='ABI'
          onClick={() => setSubTab('abi')}
          type='small'
        />
        <Button
          label='Bytecode'
          onClick={() => setSubTab('bytecode')
        }
          type='small'
        />
      </div>
      { subTab === 'code' && <ContractCode />}
      { subTab === 'abi' && <ContractABI />}
      { subTab === 'bytecode' && <ByteCode />}
    </div>
  )
}

export default ContractGeneral
