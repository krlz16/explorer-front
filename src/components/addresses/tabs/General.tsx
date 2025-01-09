import { IAddresses } from "@/common/interfaces/Addresses";
import { parseDate } from "@/common/utils/Time";
import ListContent from "@/components/generals/ListContent";
import ListItem from "@/components/generals/ListItem";

type props = {
  address: IAddresses | undefined
}
function General({ address }: props) {
  console.log('address: ', address?.type);
  // const generalsItems = [
  //   { label: 'Address', value: address?.address },
  //   { label: 'Balance', value: `${address?.balance} RBTC` },
  //   { label: 'Type', value: address?.type },
  //   { label: 'Block', value: parseDecimals(address?.blockNumber) },
  // ];
  // const contract = [
  //   { label: 'Address', value: address?.address },
  //   { label: 'Balance', value: `${address?.balance} RBTC` },
  //   { label: 'Type', value: address?.type },
  //   { label: 'Block', value: parseDecimals(address?.blockNumber) },
  //   { label: 'Timestamp', value: parseDate(address?.createdByTx.timestamp).timeAgo },
  //   { label: 'Date', value: parseDate(address?.createdByTx.timestamp).formattedDate },
  //   { label: 'Tx', value: address?.createdByTx.receipt.transactionHash }
  // ];
  // const items2 = [
  //   { label: 'Name', value: address?.name },
  //   { label: 'Symbol', value: address?.symbol },
  //   { label: 'Address', value: address?.address },
  //   { label: 'Balance', value: `${address?.balance} RBTC` },
  //   { label: 'Type', value: address?.type },
  //   { label: 'Block', value: parseDecimals(address?.blockNumber) },
  //   { label: 'Contract Interface', value: <span>{address?.interfaces.map((i) => i)}</span> },
  //   { label: 'Timestamp', value: parseDate(address?.createdByTx.timestamp).timeAgo },
  //   { label: 'Date', value: parseDate(address?.createdByTx.timestamp).formattedDate },
  //   { label: 'Internal Tx', value: address?.createdByTx.internalTxId },
  //   { label: 'Decimals', value: address?.createdByTx.internalTxId },
  //   { label: 'Total Supply', value: address?.createdByTx.internalTxId },
  // ];

  const { timeAgo, formattedDate } = parseDate(address?.createdByTx?.timestamp);

  return (
    <ListContent>
      <ListItem title="Address" value={address?.address} />
      <ListItem title="Balance" value={`${address?.balance} RBTC`} />
      <ListItem title="Type" value={address?.type} />
      <ListItem title="Block" value={address?.blockNumber} />
      <ListItem title="Timestamp" value={`${timeAgo} | ${formattedDate}`} />
      <ListItem title="Internal Tx" value={address?.createdByTx?.internalTxId} />
    </ListContent>
  )
}

export default General
