'use client'
import Button from '../ui/Button'
import { LeftIcon, RightIcon } from '@/common/icons';
import { useRouter } from 'next/navigation';
import { INavigation } from '@/common/interfaces/IResponse';

interface props {
  navigation: INavigation | undefined
  route: string
}
export default function PageNavigation({ navigation, route }: props) {
  const router = useRouter();

  const navigationPage = (block: number | string | undefined) => {
    router.push(`${route}/${block}`)
  }

  return (
    <div className="flex gap-3">
      { navigation?.prev && (
          <Button
            className="border-none"
            label="Previous"
            icon={<LeftIcon />}
            onClick={() => navigationPage(navigation?.prev)}
          />
        )
      }
      {
        navigation?.next && (
          <Button
            className="border-none flex-row-reverse"
            label="Next"
            icon={<RightIcon />}
            onClick={() => navigationPage(navigation?.next)}
          />
        )
      }
    </div>
  )
}