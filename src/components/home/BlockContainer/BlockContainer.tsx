import { fetchData } from "@/app/lib/data";
import { IBlocks } from "@/common/interfaces/Blocks";
import Link from "next/link";
import { ROUTER } from "@/common/constants";
import { RightArrowIcon } from "@/common/icons";
import BlockCard from "./BlockCard";

export default async function BlockContainer() {
  const params = {
    take_data: 6
  };
  const response = await fetchData<IBlocks[]>(ROUTER.BLOCKS.INDEX, params)
  const blocks = response?.data;
  return (
    <div className="w-full">
      <div className="text-left text-2xl font-semibold mb-2 pl-6">Blocks</div>
      {
        blocks?.map((block, i) => (
          <BlockCard key={i} block={block} />
        ))
      }
      <div className="mt-6 w-full text-center">
        <Link href={ROUTER.BLOCKS.INDEX} className="hover:underline flex justify-center items-center gap-2">
          See all blocks
          <RightArrowIcon />
        </Link>
      </div>
    </div>
  )
}
