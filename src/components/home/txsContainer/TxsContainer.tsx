'use client'
import { RightArrowIcon } from "@/common/icons";
import { ROUTER } from "@/common/constants";
import Link from "next/link";
import TxCard from "./TxCard";
import { useHomeDataContext } from "@/context/HomeContext";
import CardLoader from "@/components/loaders/CardLoader";
import Card from "@/components/ui/Card";

export default function TxsContainer() {
  const { txs } = useHomeDataContext();

  if (!txs) return <CardLoader />
  
  return (
    <Card className="w-full bg-secondary mt-3 md:mt-0" pd="p3">
      <div className="text-left text-2xl font-semibold mb-2 pl-6">Transactions</div>
      {
        txs?.slice(0,6).map((tx, i) => (
          <TxCard tx={tx} key={i} />
        ))
      }
      <div className="mt-3 w-full text-center">
        <Link href={ROUTER.TXS.INDEX} className="hover:underline flex justify-center items-center gap-2">
          See all transactions
          <RightArrowIcon />
        </Link>
      </div>
    </Card>
  )
}
