'use client';

import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Code from '@/components/ui/Code';
import { useAddressDataContext } from '@/context/AddressContext';
import { useRouter } from 'next/navigation';
import React from 'react';

function ContractUnverified() {
  const { address } = useAddressDataContext();
  const router = useRouter();

  const onVerifyButtonClick = () => {
    router.push(`/verify/${address?.address}`);
  };
  return (
    <Card className="bg-secondary mt-6 w-full">
      <div className="flex gap-2 mb-4">
        <Button label="Code" type="small" className="bg-btn-secondary" />
        <Button label="Verify" type="small" onClick={onVerifyButtonClick} />
      </div>
      <div className="font-medium text-sm mb-2">Contract creation code</div>
      <Code code={address?.code} />
      {address?.deployedCode && (
        <>
          <div className="mt-8 font-medium text-sm mb-2">Deployed Bytecode</div>
          <Code code={address?.deployedCode} />
        </>
      )}
    </Card>
  );
}

export default ContractUnverified;
