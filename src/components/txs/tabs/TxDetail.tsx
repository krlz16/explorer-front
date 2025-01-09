import { ITxs } from '@/common/interfaces/Txs';
import { parseDecimals } from '@/common/utils/ParseDecimals';
import { parseDate } from '@/common/utils/Time';
import Badge from '@/components/ui/Badge';
import ListContent from '@/components/generals/ListContent';
import ListItem from '@/components/generals/ListItem';

function TxDetail({ tx }: { tx: ITxs | undefined }) {
  const { timeAgo, formattedDate } = parseDate(tx?.timestamp);
  const items = [
    { label: 'Status', value: Number(tx?.receipt.status) ? <Badge text="SUCCESSFUL" type="success" /> : <Badge text="FAIL" type="fail" /> },
    { label: 'Fee', value: tx?.gasUsed },
    { label: 'Input', value: <div className="w-full break-words h-25 overflow-y-scroll bg-secondary p-4 rounded-xl">{tx?.input}</div> },
  ];
  return (
    <ListContent>
      <ListItem title='Hash' value={tx?.hash} />
      <ListItem title='Block' value={parseDecimals(tx?.blockNumber)} />
      <ListItem title='Index' value={tx?.transactionIndex} />
      <ListItem title='From' value={tx?.from} />
      <ListItem title='To' value={tx?.to} />
      <ListItem title='Value' value={tx?.value} />
      <ListItem title='type' value={tx?.txType} />
      <ListItem title='Status' value={
          Number(tx?.receipt.status)
            ? <Badge text="SUCCESSFUL" type="success" />
            : <Badge text="FAIL" type="fail" />
        }
      />
      <ListItem title='Nonce' value={tx?.nonce} />
      <ListItem title='Fee' value={tx?.gasUsed} />
      <ListItem title='Time' value={timeAgo} />
      <ListItem title='Date' value={formattedDate} />
      <ListItem title='Gas' value={tx?.gas} />
      <ListItem title='Gas Used' value={tx?.gasUsed} />
      <ListItem title='Gas Price' value={tx?.gasPrice} />
      <ListItem title='Input' value={tx?.input} />

    </ListContent>
  )
}

export default TxDetail
