import TxsContainer from "@/components/home/txsContainer/TxsContainer";
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
        <div className="my-3 md:columns-2 flex flex-col md:flex-row gap-3">
          <LastBlock />
          <TxsChartContainer />
        </div>
        <div className="md:flex gap-3 mt-3">
          <BlockContainer />
          <TxsContainer />
        </div>
      </div>
    </HomeContext>
  );
}
