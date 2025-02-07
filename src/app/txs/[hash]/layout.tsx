import { ROUTER } from '@/common/constants';
import { ReturIcon, TxIcon } from '@/common/icons';
import Card from '@/components/ui/Card';
import Link from 'next/link';
import ToolTip from '@/components/ui/ToolTip';
import { TxsDataContextProvider } from '@/context/TxsContext';
import { fetchTxsByHash } from '@/services/transactions';

type props = {
  params: Promise<{
    hash: string;
  }>;
  children: React.ReactNode;
};

export default async function layout({ children, params }: props) {
  const txParam = (await params).hash;
  const response = await fetchTxsByHash(txParam);
  const tx = response?.data;

  return (
    <Card pd="p0" className="mb-14 mt-6">
      <Link
        href={ROUTER.TXS.INDEX}
        className={`flex items-center gap-2 cursor-pointer mb-6 text-sm text-brand-orange`}
      >
        <ReturIcon className="fill-brand-orange" />
        All Transactions
      </Link>
      <h1 className="flex gap-3 items-center text-3xl font-medium">
        <TxIcon className="w-6 h-6" /> Transaction detail
      </h1>
      <div className="text-white-400 mt-6">
        Transaction hash{' '}
        <span className="text-brand-purple">
          <ToolTip text={tx?.hash} trim={24} />
        </span>
      </div>
      <TxsDataContextProvider tx={tx}>{children}</TxsDataContextProvider>
    </Card>
  );
}
