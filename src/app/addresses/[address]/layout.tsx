import { fetchData } from "@/app/lib/data"
import { ROUTER } from "@/common/constants"
import { AddressIcon } from "@/common/icons"
import { IAddresses } from "@/common/interfaces/Addresses"
import { ADDRESSES_BTN_TABS } from "@/components/addresses/tabs/AddressesTabs"
import Code from "@/components/addresses/tabs/Code"
import General from "@/components/addresses/tabs/General"
import Card from "@/components/ui/Card"
import PageHeader from "@/components/page/PageHeader"

type props = {
  params: Promise<{
    address: number
  }>,
  children: React.ReactNode
}

export default async function layout({ children, params }:props) {
  const addressParam = (await params).address;
  const response = await fetchData<IAddresses>(`${ROUTER.ADDRESSES.INDEX}/${addressParam}`)
  const address = response?.data;

  return (
    <Card pd="p0">
      <PageHeader
        breadcrumb={{ name: 'Addresses', path: ROUTER.ADDRESSES.INDEX }}
        icon={<AddressIcon />}
        title={`${address?.type}`}
        themeBtn="bg-brand-pink text-white"
        buttons={ADDRESSES_BTN_TABS}
        tabContents={[
          {
            tab: 'general',
            content: (
              <General
                address={address}
              />
            )
          },
          {
            tab: 'code',
            content: (
              <Code
                code={address?.code}
              />
            )
          }
        ]}
      >
        
      </PageHeader>
      { children }
    </Card>
  )
}
