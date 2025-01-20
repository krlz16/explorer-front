import CardLoader from "@/components/loaders/CardLoader";
import TxsContainer from "@/components/home/txsContainer/TxsContainer";
import { Suspense } from "react";
import BlockContainer from "@/components/home/blockContainer/BlockContainer";
import LastBlock from "@/components/home/blockContainer/LastBlock";
import Hero from "@/components/home/Hero";
import StatsContainer from "@/components/home/stats/StatsContainer";
import { HomeContext } from "@/context/HomeContext";
import TxsChartContainer from "@/components/home/txsChart/TxsChartContainer";

export default async function Home() {
  return (
    <HomeContext>
      <div className="mb-10">
        <Hero />
        <StatsContainer />
        <div className="my-3 flex columns-2 gap-3">
          <LastBlock />
          <TxsChartContainer />
        </div>
        <div className="flex gap-4 mt-10">
          <div className="w-full">
            <Suspense fallback={<CardLoader />}>
              <BlockContainer />
            </Suspense>
          </div>
          <div className="w-full">
            <Suspense fallback={<CardLoader />}>
              <TxsContainer />
            </Suspense>
          </div>
        </div>
      </div>
    </HomeContext>
  );
}
