import CardLoader from "@/components/loaders/CardLoader";
import TxsContainer from "@/components/home/TxsContainer/TxsContainer";
import { Suspense } from "react";
import CardContainer from "@/components/home/card/CardContainer";
import BlockContainer from "@/components/home/BlockContainer/BlockContainer";
import LastBlock from "@/components/home/BlockContainer/LastBlock";
import { TxsChart } from "@/components/home/TxsContainer/TxsChart";

type props = {
  searchParams: Promise<{
    active: true
  }>
}

export default async function Home(props:props) {
  const params = await props.searchParams;
  console.log('params: ', params);
  return (
    <div>
      <CardContainer />
      <div className="my-3 flex columns-2 gap-3">
        <LastBlock />
        <TxsChart />
        {/* <div className="w-full h-40 bg-secondary rounded-xl"></div> */}
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
  );
}
