import { fetchData } from "@/app/lib/data";
import { ROUTER } from "@/common/constants";
import { IBlocks } from "@/common/interfaces/Blocks";
import BlockContentPage from "@/components/blocks/BlockContentPage";
import Card from "@/components/generals/Card";

type props = {
  params: Promise<{
    id: number
  }>,
  children: React.ReactNode
}
export default async function layout({ children, params }: props) {
  const { id } = await params
  const response = await fetchData<IBlocks>(`${ROUTER.BLOCKS.INDEX}/${id}`);
  const block = response?.data;

  return (
    <Card pd="p0" className="mb-14">
      <BlockContentPage
        block={block}
        navigation={response?.navigation}
      />
      { children }
    </Card>
  )
}
