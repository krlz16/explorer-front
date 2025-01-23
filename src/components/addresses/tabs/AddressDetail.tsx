'use client'
import ListContent from "@/components/generals/ListContent";
import ListItem from "@/components/generals/ListItem";
import Date from "@/components/ui/Date";
import { useAddressDataContext } from "@/context/AddressContext";

function AddressDetail() {
  const { address } = useAddressDataContext();
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

  return (
    <ListContent>
      {
        address?.type === 'contract' ? (
          <>
            <ListItem title="Contract Name:" value={address?.name} />
            <ListItem title="Symbol:" value={address?.symbol} />
            <ListItem title="Timestamp" value={<Date date={address?.createdByTx?.timestamp} />} />
            <ListItem title="Total Supply" value={address?.totalSupply} />
          </>
        )
        : 
        (
          <>
            <ListItem title="Balance" value={`${address?.balance} RBTC`} />
            <ListItem title="Type" value={address?.type} />
          </>
        )
      }
      <ListItem title="Updated at block:" value={address?.blockNumber} />
    </ListContent>
  )
}

export default AddressDetail
