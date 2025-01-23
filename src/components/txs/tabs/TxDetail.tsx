import { parseDecimals } from '@/common/utils/ParseDecimals';
import ListContent from '@/components/generals/ListContent';
import ListItem from '@/components/generals/ListItem';
import { useTxsDataContext } from '@/context/TxsContext';
import Date from '@/components/ui/Date';
import Status from '@/components/ui/Status';
import Badge from '@/components/ui/Badge';
import Code from '@/components/ui/Code';

function TxDetail() {
  const { tx } = useTxsDataContext();
  // const items = [
  //   { label: 'Input', value: <div className="w-full break-words h-25 overflow-y-scroll bg-secondary p-4 rounded-xl">{tx?.input}</div> },
  // ];
  return (
    <ListContent>
      <ListItem title='Hash' type='tooltip' value={tx?.hash} className='text-brand-purple' />
      <ListItem title='Timestamp' value={<Date date={tx?.timestamp} />} />
      <ListItem title='Status' value={
          <Status value={Number(tx?.receipt.status)} />
        }
      />
      <ListItem title='Block' value={parseDecimals(tx?.blockNumber)} className='text-brand-purple' />
      <ListItem title='Type' value={<Badge text={tx!.txType!} type='info'/>} />
      <ListItem title='Nonce' value={tx?.nonce} />
      {/* <ListItem title='Index' value={tx?.transactionIndex} /> */}
      <hr className="border-gray-700 border-[1px] my-2" />
      <ListItem title='From:' type='tooltip' value={tx?.from} className='text-brand-purple'/>
      <ListItem title='To:' type='tooltip' value={tx?.to} className='text-brand-purple'/>
      <hr className="border-gray-700 border-[1px] my-2" />

      <ListItem title='Value' value={`${tx?.value} RBTC`} />
      {/* <ListItem title='Fee' value={tx?.gasUsed} /> */}
      <ListItem title='Gas' value={parseDecimals(tx?.gas)} />
      <ListItem title='Gas Price' value={tx?.gasPrice} />
      <ListItem title='Gas Used' value={parseDecimals(tx?.gasUsed)} />
      <ListItem title='Input' value={
        <Code code={tx?.input} />
      } />
      {/* <ListItem title='type' value={tx?.txType} /> */}
      {/* <ListItem title='Nonce' value={tx?.nonce} /> */}
      {/* <ListItem title='Input' value={tx?.input} /> */}

    </ListContent>
  )
}

export default TxDetail
