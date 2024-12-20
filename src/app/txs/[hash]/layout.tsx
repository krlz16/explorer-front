import { fetchData } from "@/app/lib/data"
import { ROUTER } from "@/common/constants"
import { AddressIcon, BlockIcon, MinerIcon, TokenIcon, TxIcon } from "@/common/icons"
import { ITxs } from "@/common/interfaces/Txs"
import Accordion from "@/components/control/Accordion"
import Card from "@/components/generals/Card"
import DataList from "@/components/generals/DataList"
import PageHeader from "@/components/page/PageHeader"

type props = {
  params: Promise<{
    hash: number
  }>,
  children: React.ReactNode
}

export default async function layout({ children, params }:props) {
  const txParam = (await params).hash;
  const response = await fetchData<ITxs>(`${ROUTER.TXS}/${txParam}`)
  const tx = response?.data;

  const items = [
    { label: <TxIcon />, value: tx?.hash },
    { label: <BlockIcon />, value: tx?.blockNumber },
    { label: <TokenIcon />, value: tx?.from },
    { label: <AddressIcon />, value: tx?.to },
    { label: "Repeated Label", value: tx?.timestamp },
    { label: <MinerIcon />, value: tx?.gasUsed },
  ];

  return (
    <Card pd="p0">
      <PageHeader
        breadcrumb={{ name: 'Transactions', path: ROUTER.TXS }}
        icon={<AddressIcon className="w-6 h-6" />}
        title="Transaction"
        themeBtn="bg-brand-orange text-black"
        buttons={[
          { label: 'Transaction', tab: 'tx' },
          { label: `Logs (${tx?.receipt.logs.length})`, tab: `logs` },
          { label: 'Token transfer', tab: 'ttranfers' },
        ]}
        tabContents={[
          {
            tab: 'tx',
            content: (
              <DataList
                items={items}
              />
            ),
          },
          {
            tab: 'logs',
            content: (
              <div>
                {
                  tx?.receipt.logs.map((log, i) => (
                    <Card pd="p0" key={i} className="w-full border border-gray-500 my-3 text-white-400">
                      <Accordion
                        title={`${log.logIndex} ${log.address} ${log.event}`}
                        >
                        <div className="flex shadow-line p-3">
                          <div>Log Index</div>
                          <div>{log.logIndex}</div>
                        </div>
                        <div className="flex shadow-line p-3">
                          <div>Address</div>
                          <div>{log.address}</div>
                        </div>
                        <div className="flex shadow-line p-3">
                          <div>Event</div>
                          <div>{log.event}</div>
                        </div>
                      </Accordion>
                    </Card>
                  ))
                }
              </div>
            ),
          },
        ]}
      >
        
      </PageHeader>
      { children }
    </Card>
  )
}
