import { ROUTER } from "@/common/constants"
import { AddressIcon } from "@/common/icons"
import { ADDRESSES_BTN_TABS } from "@/components/addresses/tabs/AddressesTabs"
import Code from "@/components/addresses/tabs/Code"
import General from "@/components/addresses/tabs/General"
import Card from "@/components/ui/Card"
import PageHeader from "@/components/page/PageHeader"
import { fetchAddress } from "@/services/addresses"

type props = {
  params: Promise<{
    address: string
  }>,
  children: React.ReactNode
}

export default async function layout({ children, params }:props) {
  const addressParam = (await params).address;
  const response = await fetchAddress(addressParam);
  const address = response?.data;

  return (
    <Card pd="p0">
      {/* <PageHeader
        breadcrumb={{ name: 'Verify', path: ROUTER.ADDRESSES.INDEX }}
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
        
      </PageHeader> */}
      { children }
    </Card>
  )
}
