'use client';
import { ArrowLeftIcon, ArrowRightIcon } from '@/common/icons';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import Button from '@/components/ui/Button';
import React from 'react';

type BlockPaginationProps = {
  data: {
    nextCursor: number | null;
    prevCursor: number | null;
    take: number;
  };
};

function BlocksPagination({ data }: BlockPaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams?.toString());

  const handlePage = (cursor: number | null, direction: string) => {

    if (direction === 'next' && data.nextCursor) {
      params.set('cursor', data.nextCursor.toString());
    } else if (direction === 'prev' && data.prevCursor) {
      params.set('cursor', data.prevCursor.toString());
    } else {
      params.delete('cursor'); // Reset if no cursor is available
    }

    router.push(`${pathname}?${params.toString()}`);
    router.refresh();
  };

  return (
    <div className="flex justify-between items-center mt-6">
      <div className="font-semibold">{/* {text} {data.total || 'N/A'} */}</div>
      <div className="flex items-center gap-3">
        <Button
          onClick={() => handlePage(data.prevCursor, 'prev')}
          disabled={!data.prevCursor}
          icon={
            <ArrowLeftIcon
              className={`${!data.prevCursor ? '!fill-gray-400' : 'fill-white'}`}
            />
          }
          type="secondary"
        />
        <Button
          onClick={() => handlePage(data.nextCursor, 'next')}
          disabled={!data.nextCursor}
          icon={
            <ArrowRightIcon
              className={`${!data.nextCursor ? '!fill-gray-400' : 'fill-white'}`}
            />
          }
          type="secondary"
        />
      </div>
    </div>
  );
}

export default BlocksPagination;
