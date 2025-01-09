import { fetchData } from "@/app/lib/data";
import { ROUTER } from "@/common/constants";
import { TxIcon } from "@/common/icons";
import { IInternalTxs } from "@/common/interfaces/Txs";
import { parseDate } from "@/common/utils/Time";
import ListContent from "@/components/generals/ListContent";
import ListItem from "@/components/generals/ListItem";
import PageHeader from "@/components/page/PageHeader";
import Card from "@/components/ui/Card";

type props = {
  params: Promise<{
    id: string
  }>,
}

export default async function page({params}: props) {
  const txParam = (await params).id;
  const response = await fetchData<IInternalTxs>(`${ROUTER.ITXS.INDEX}/${txParam}`)
  const itx = response?.data;
  const { timeAgo, formattedDate } = parseDate(itx?.timestamp);
  return (
    <Card pd="p0">
      <PageHeader
        breadcrumb={{ name: 'Transactions', path: ROUTER.BLOCKS.INDEX }}
        icon={<TxIcon className="w-6 h-6" />}
        title={`Internal Transaction`}
        themeBtn="bg-brand-green text-black"
        buttons={[
          {
            label: 'Overview',
            tab: 'overview'
          }
        ]}
        tabContents={[
          {
            tab: 'overview',
            content: (
              <ListContent>
                <ListItem title="From" value={itx?.action.from} />
                <ListItem title="To" value={itx?.action.to} />
                <ListItem title="Type" value={itx?.type} />
                <ListItem title="Call Type" value={itx?.action.callType} />
                <ListItem title="Input" value={itx?.action.input} />
                <ListItem title="Value" value={itx?.action.value} />
                <ListItem
                  title="Status"
                  value={itx?.error ? 'Failed' : 'SUCCESS'}
                />
                <ListItem title="Timestamp" value={`${timeAgo} | ${formattedDate}`} />
                <ListItem title="Transaction" value={itx?.transactionHash} />
                <ListItem title="Block Hash" value={itx?.blockHash} />
                <ListItem title="Block Number" value={itx?.blockNumber} />
                <ListItem title="Gas" value={itx?.action.gas} />
                <ListItem title="Gas Used" value={itx?.result?.gasUsed} />
                <ListItem title="Output" value={itx?.result?.output} />
                <ListItem title="Error" value={itx?.error} />
              </ListContent>
            )
          }
        ]}
        >
      </PageHeader>
    </Card>
  )
}
