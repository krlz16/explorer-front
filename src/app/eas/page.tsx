
import { IPageProps } from '@/common/interfaces/RouterParams';
import { fetchAttestations, fetchTotalAttestations, fetchTotalOffchainAttestations, fetchTotalSchemas } from '@/services/eas';
import AttestationsTable from '@/components/eas/EasTable';
import { BlockIcon, TxIcon } from '@/common/icons';

export default async function page(props: IPageProps) {
  const params = await props.searchParams;
  const response = await fetchAttestations(params);
  const totalAttestation = await fetchTotalAttestations(params);
  const totalOffchainAttestations = await fetchTotalOffchainAttestations();
  const totalSchemas = await fetchTotalSchemas();
  return (
    <div className='w-full'>      
      <div className='mt-8 flex justify-between gap-6'>
        <div className='h-20 w-full p-4 rounded-xl bg-secondary flex justify-between items-center'>
          <div>
            <div className='font-bold text-2xl'>{totalAttestation?.data.aggregateAttestation._count.id ?? 0}</div>
            <div className='text-sm text-white-400'>Total Attestations</div>
          </div>
          <div>
            <TxIcon className='w-7 h-7' />
          </div>
        </div>
        <div className='h-20 w-full p-4 rounded-xl bg-secondary flex justify-between items-center'>
          <div>
            <div className='font-bold text-2xl'>{totalSchemas?.data.aggregateSchema._count.id ?? 0}</div>
            <div className='text-sm text-white-400'>All Schemas</div>
          </div>
          <div>
            <TxIcon className='w-7 h-7' />
          </div>
        </div>
        <div className='h-20 w-full p-4 rounded-xl bg-secondary flex justify-between items-center'>
          <div>
            <div className='font-bold text-2xl'>{totalOffchainAttestations?.data.aggregateAttestation._count.id ?? 0}</div>
            <div className='text-sm text-white-400'>Offchain Attestations
            </div>
          </div>
          <div>
            <BlockIcon className='w-7 h-7' fill='fill-white' />
          </div>
        </div>
      </div>      
      <AttestationsTable attestations={response?.data} />
    </div>    
  )
}