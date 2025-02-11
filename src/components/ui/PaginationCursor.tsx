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
    hasMoreData?: boolean;
  };
};

function PaginationCursor({ data }: BlockPaginationProps) {
  console.log('data: ', data)
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams?.toString());

  const handlePage = (
    cursor: number | null,
    direction: 'first' | 'next' | 'prev',
  ) => {
    if (direction === 'first') {
      params.delete('cursor');
      params.set('take', Math.abs(data.take).toString());
    } else if (direction === 'prev') {
      if (!cursor || (data.take < 0 && data.hasMoreData === false)) {
        params.delete('cursor');
        params.set('take', Math.abs(data.take).toString());
      } else {
        params.set('cursor', cursor.toString());
        params.set('take', (-Math.abs(data.take)).toString());
      }
    } else if (direction === 'next') {
      if (cursor) {
        params.set('cursor', cursor.toString());
        params.set('take', Math.abs(data.take).toString());
      }
    }

    if (!cursor && direction !== 'first') {
      params.delete('cursor');
    }

    router.push(`${pathname}?${params.toString()}`);
    router.refresh();
  };

  return (
    <div className="flex justify-between items-center mt-6">
      <div className="font-semibold">{/* {text} {data.total || 'N/A'} */}</div>
      <div className="flex items-center gap-3">
        {/* First Button */}
        <Button
          label="First"
          onClick={() => handlePage(null, 'first')}
          type="secondary"
        />

        {/* Previous Button */}
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

        {/* Next Button */}
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

export default PaginationCursor;
