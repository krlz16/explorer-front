import PageTitle from '@/components/ui/PageTitle';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <PageTitle title="Tokens" />
      {children}
    </div>
  );
}
