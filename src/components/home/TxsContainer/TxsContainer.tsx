import { fetchData } from "@/app/lib/data";
import { ITxs } from "@/common/interfaces/Txs";
import { RightArrowIcon } from "@/common/icons";
import { ROUTER } from "@/common/constants";
import Link from "next/link";
import TxCard from "./TxCard";

export default async function TxsContainer() {
  const params = {
    take_data: 6
  };
  const response = await fetchData<ITxs[]>(ROUTER.TXS, params);
  const txs = response?.data;
  return (
    <div className="w-full">
      <div className="text-left text-2xl font-semibold mb-2 pl-6">Transactions</div>
      {
        txs?.map((tx, i) => (
          <TxCard tx={tx} key={i} />
        ))
      }
      <div className="mt-6 w-full text-center">
        <Link href={ROUTER.BLOCKS} className="hover:underline flex justify-center items-center gap-2">
          See all txs
          <RightArrowIcon />
        </Link>
      </div>
    </div>
  )
}
