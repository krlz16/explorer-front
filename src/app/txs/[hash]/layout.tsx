import { fetchData } from "@/app/lib/data"
import { ROUTER } from "@/common/constants"
import { AddressIcon } from "@/common/icons"
import { ITxs } from "@/common/interfaces/Txs"
import Card from "@/components/ui/Card"
import PageHeader from "@/components/page/PageHeader"
import LogsContainer from "@/components/txs/Logs/LogsContainer"
import TxDetail from "@/components/txs/tabs/TxDetail"
import { TXS_BTN_TABS } from "@/components/txs/tabs/TxsTabs"

type props = {
  params: Promise<{
    hash: number
  }>,
  children: React.ReactNode
}

export default async function layout({ children, params }:props) {
  const txParam = (await params).hash;
  const response = await fetchData<ITxs>(`${ROUTER.TXS.INDEX}/${txParam}`)
  const tx = response?.data;

  return (
    <Card pd="p0">
      <PageHeader
        breadcrumb={{ name: 'Transactions', path: ROUTER.TXS.INDEX }}
        icon={<AddressIcon className="w-6 h-6" />}
        title="Transaction"
        themeBtn="bg-brand-orange text-black"
        buttons={TXS_BTN_TABS}
        tabContents={[
          {
            tab: 'tx',
            content: (
              <TxDetail tx={tx} />
            ),
          },
          {
            tab: 'logs',
            content: (
              <LogsContainer
                logs={tx?.receipt.logs}
              />
            ),
          },
          {
            tab: 'ttranfers',
            content: (
              <div className="text-sm text-white-100 font-semibold text-center mt-10">The Transaction Does Not Contain Token Transfer Events</div>
            ),
          },
        ]}
      >
        
      </PageHeader>
      { children }
    </Card>
  )
}
