import React, { useState } from 'react';
import ContractCode from './ContractCode';
import ContractABI from './ContractABI';
import ByteCode from './ByteCode';
import { CheckIcon } from '@/common/icons';
import { useAddressDataContext } from '@/context/AddressContext';
import Date from '@/components/ui/Date';
import ButtonGroup from '@/components/ui/ButtonGroup';

type ISubtab = 'code' | 'abi' | 'bytecode';

function ContractGeneral() {
  const { address, contractVerification: contract } = useAddressDataContext();
  const optimizer = contract?.request.settings.optimizer;
  const [subTab, setSubTab] = useState<ISubtab>('code');

  const btnGroup = [
    { label: 'Code', value: 'code' },
    { label: 'ABI', value: 'abi' },
    { label: 'Bytecode', value: 'bytecode' },
  ];

  return (
    <div>
      <div className="w-full mt-4">
        <div className="flex items-center gap-1">
          <CheckIcon />
          Contract Source Code Verified{' '}
          <span className="text-white-400">(Exact Match)</span>
        </div>
        <div className="flex w-full justify-between mt-4">
          <div className="flex flex-1 w-full">
            <div className="text-white-400 w-1/3">Contract Name:</div>
            <div className="w-2/3">
              {address?.name || contract?.request.name}
            </div>
          </div>
          <div className="flex flex-1">
            <div className="text-white-400 w-1/3">Verification Date:</div>
            <div className="w-2/3">
              <Date date={contract?.timestamp} />
            </div>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="flex flex-1">
            <div className="text-white-400 w-1/3">Optimization:</div>
            <div className="w-2/3">
              <span className="text-brand-pink">{`${optimizer?.enabled}`}</span>{' '}
              with {optimizer?.runs} runs
            </div>
          </div>
          <div className="flex flex-1">
            <div className="text-white-400 w-1/3">Compiler version:</div>
            <div className="w-2/3">{contract?.request.version}</div>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="flex flex-1">
            <div className="text-white-400 w-1/3">EVM Version:</div>
            <div className="w-2/3">{contract?.request.settings.evmVersion}</div>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
      <ButtonGroup
        className="mb-4 mt-5"
        options={btnGroup}
        activeValue={subTab}
        onChange={(value) => setSubTab(value as ISubtab)}
      />
      {subTab === 'code' && <ContractCode />}
      {subTab === 'abi' && (
        <ContractABI abi={JSON.stringify(contract?.abi, null, 2)} />
      )}
      {subTab === 'bytecode' && <ByteCode />}
    </div>
  );
}

export default ContractGeneral;
