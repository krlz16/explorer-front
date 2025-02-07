'use client';
import Button from '../ui/Button';
import { LeftIcon, RightIcon } from '@/common/icons';
import { useRouter } from 'next/navigation';
import { INavigation } from '@/common/interfaces/IResponse';

interface props {
  navigation: INavigation | undefined;
  route: string;
}
export default function PageNavigation({ navigation, route }: props) {
  const router = useRouter();

  const navigationPage = (block: number | string | undefined) => {
    router.push(`${route}/${block}`);
  };

  return (
    <div className="flex gap-2">
      {navigation?.prev && (
        <Button
          className="border-none"
          type="icon"
          label=""
          icon={<LeftIcon />}
          onClick={() => navigationPage(navigation?.prev)}
        />
      )}
      {navigation?.next && (
        <Button
          className="border-none"
          type="icon"
          label=""
          icon={<RightIcon />}
          onClick={() => navigationPage(navigation?.next)}
        />
      )}
    </div>
  );
}
