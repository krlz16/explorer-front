import { fetchData } from "@/app/lib/data"
import { ROUTER } from "@/common/constants"
import { AddressIcon, BlockIcon, MinerIcon, TokenIcon, TxIcon } from "@/common/icons"
import { IAddresses } from "@/common/interfaces/Addresses"
import Card from "@/components/generals/Card"
import DataList from "@/components/generals/DataList"
import PageHeader from "@/components/page/PageHeader"

type props = {
  params: Promise<{
    address: number
  }>,
  children: React.ReactNode
}

export default async function layout({ children, params }:props) {
  const addressParam = (await params).address;
  const response = await fetchData<IAddresses>(`${ROUTER.ADDRESSES}/${addressParam}`)
  const address = response?.data;

  const items = [
    { label: <TxIcon />, value: address?.address },
    { label: <BlockIcon />, value: address?.blockNumber },
    { label: <TokenIcon />, value: address?.id },
    { label: <MinerIcon />, value: address?.type },
  ];

  return (
    <Card pd="p0">
      <PageHeader
        breadcrumb={{ name: 'Addresses', path: ROUTER.ADDRESSES }}
        icon={<AddressIcon />}
        title="Address"
        titleColor="brand-pink"
        themeBtn="bg-brand-pink text-white"
        buttons={[
          { label: 'General', tab: 'general' },
          { label: 'Code', tab: 'code' },
        ]}
        tabContents={[
          {
            tab: 'general',
            content: (
              <DataList items={items} />
            )
          },
          {
            tab: 'code',
            content: (
              <Card pd="p3" className="w-fit h-40 text-xs text-white-400 bg-primary break-all overflow-y-scroll">
                { address?.code }
              </Card>
            )
          }
        ]}
      >
        
      </PageHeader>
      { children }
    </Card>
  )
}
