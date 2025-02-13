import { TxIcon } from '@/common/icons';
import PageTitle from '@/components/ui/PageTitle';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <PageTitle title="Tokens" icon={<TxIcon className="w-6 h6" />} />
      {children}
    </div>
  );
}
