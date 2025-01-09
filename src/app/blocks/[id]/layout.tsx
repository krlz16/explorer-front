import BlockContentPage from "@/components/blocks/BlockContentPage";
import Card from "@/components/ui/Card";
import { fetchOneBlock } from "@/services/blocks";

type props = {
  params: Promise<{
    id: number
  }>,
  children: React.ReactNode
}
export default async function layout({ children, params }: props) {
  const { id } = await params
  const response = await fetchOneBlock(id);
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
