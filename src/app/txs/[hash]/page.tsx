'use client';

import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import TableLoader from "@/components/loaders/TableLoader";
import Button from "@/components/generals/Button";
import useFetch from "@/hooks/useFetch";
import { ROUTER } from "@/common/constants";
import InternalTxsTable from "@/components/itxs/InternalTxsTable";
import { IInternalTxs } from "@/common/interfaces/Txs";

type ITab = 'itxs' | 'txs';
export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const urlhash = useParams();
  const params = new URLSearchParams(searchParams?.toString());
  
  const currentTap = searchParams?.get("tab") as ITab || 'itxs';

  const { data, error, loading} = useFetch<IInternalTxs[]>(`${ROUTER.TXS}/itxs/${urlhash.hash}`)

  const changeTab = (newTab: string) => {
    const tabParam = newTab.toLowerCase();
    params.set('tab', tabParam);
    router.push(`${pathname}?${params}`);
  };

  if (loading) return <div><TableLoader /></div>;
  if (error) return <div>Error</div>;

  const btns = [
    {label: 'Internal Transactions', handle: 'itxs'},
  ]

  return (
    <div className="mt-14">
      <div className="flex gap-4">
        {
          btns.map((btn, i) => (
            <Button
              key={i}
              label={btn.label}
              onClick={() => changeTab(btn.handle)}
              className={ currentTap === btn.handle ? 'bg-brand-orange text-black' : ''}
            />
          ))
        }
      </div>

      <div className="mt-4">
        <InternalTxsTable
          itxs={data?.data}
        />
      </div>
    </div>
  );
}
