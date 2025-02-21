'use client';
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  DownloadIcon,
} from '@/common/icons';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import Button from '@/components/ui/Button';
import React, { useEffect, useRef, useState } from 'react';

type BlockPaginationProps = {
  data: {
    nextCursor: number | null;
    prevCursor: number | null;
    take: number;
    hasMoreData?: boolean;
  };
};

function PaginationCursor({ data }: BlockPaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams?.toString());

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
  const handleDownload = (format: 'JSON' | 'CSV') => {
    console.log(`Downloading in ${format} format...`);
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex justify-between items-center mt-6">
      <div className="font-semibold">{/* {text} {data.total || 'N/A'} */}</div>
      <div className="flex items-center gap-3">
        {/* Download Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <Button
            label="Download"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            type="secondary"
            icon={
              <DownloadIcon
                className={`${!data.prevCursor ? '!fill-gray-400' : 'fill-white'}`}
              />
            }
            iconRight={
              <ArrowDownIcon
                className={`${!data.prevCursor ? '!fill-gray-400' : 'fill-white'}`}
              />
            }
          />
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-gray-800 rounded-lg shadow-lg z-50">
              <button
                className="w-full px-4 py-2 text-left text-white hover:bg-gray-700 rounded-t-lg"
                onClick={() => handleDownload('JSON')}
              >
                Download JSON
              </button>
              <button
                className="w-full px-4 py-2 text-left text-white hover:bg-gray-700 rounded-b-lg"
                onClick={() => handleDownload('CSV')}
              >
                Download CSV
              </button>
            </div>
          )}
        </div>
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
