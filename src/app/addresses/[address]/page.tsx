'use client';

import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import TableLoader from "@/components/loaders/TableLoader";
import Button from "@/components/generals/Button";
import useFetch from "@/hooks/useFetch";
import { ROUTER } from "@/common/constants";
import TxsTable from "@/components/txs/TxsTable";
import { ITxs } from "@/common/interfaces/Txs";

type ITab = 'itxs' | 'txs';
export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const urlParams = useParams();
  const params = new URLSearchParams(searchParams?.toString());
  
  const currentTap = searchParams?.get("tab") as ITab || 'txs';

  const { data, error, loading} = useFetch<ITxs[]>(`${ROUTER.ADDRESSES}/txs/${urlParams.address}`)

  const changeTab = (newTab: string) => {
    const tabParam = newTab.toLowerCase();
    params.set('tab', tabParam);
    router.push(`${pathname}?${params}`);
  };

  if (loading) return <div><TableLoader /></div>;
  if (error) return <div>Error</div>;

  const btns = [
    {label: 'Transactions', handle: 'txs'},
    {label: 'Internal Transactions', handle: 'itxs'},
  ]

  return (
    <div className="mt-10 p-6">
      <div className="flex gap-4">
        {
          btns.map((btn, i) => (
            <Button
              key={i}
              label={btn.label}
              onClick={() => changeTab(btn.handle)}
              className={ currentTap === btn.handle ? 'bg-brand-pink text-white' : ''}
            />
          ))
        }
      </div>

      <div className="mt-4">
        <TxsTable txs={data?.data} />
      </div>
    </div>
  );
}
