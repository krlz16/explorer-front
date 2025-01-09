import { ROUTER } from "@/common/constants";
import { IBlocks } from "@/common/interfaces/Blocks";
import { INavigation } from "@/common/interfaces/IResponse";
import PageNavigation from "../page/PageNavigation";
import PageHeader from "../page/PageHeader";
import { BLOCKS_BTN_TABS } from "./tabs/BlocksTabs";
import { BlockIcon } from "@/common/icons";
import { parseDecimals } from "@/common/utils/ParseDecimals";
import Mining from "./tabs/Mining";
import BlockDetail from "./tabs/BlockDetail";

type props = {
  block: IBlocks | undefined
  navigation: INavigation | undefined
}
export default function BlockContentPage({ block, navigation }: props) {

  return (
    <PageHeader
      breadcrumb={{ name: 'Blocks', path: ROUTER.BLOCKS.INDEX }}
      icon={<BlockIcon className="w-6 h-6" />}
      title={`${parseDecimals(block?.number)} Block`}
      themeBtn="bg-brand-green text-black"
      buttons={BLOCKS_BTN_TABS}
      navigationsBtns={
        <PageNavigation
          navigation={navigation}
          route={ROUTER.BLOCKS.INDEX}
        />
      }
      tabContents={[
        {
          tab: 'block',
          content: (
            <BlockDetail
              block={block}
            />
          )
        },
        {
          tab: 'mining',
          content: (
            <Mining
              block={block}
            />
          )
        }
      ]}
    >
    </PageHeader>
  )
}
