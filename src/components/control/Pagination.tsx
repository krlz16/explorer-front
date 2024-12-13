'use client'
import { ArrowLeftIcon, ArrowRightIcon } from '@/common/icons'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import React from 'react'
type props = {
  data: {
    totalPages: number,
    currentPage: number,
    total: number
  }
}
function Pagination({ data }: props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams?.toString());
  params.set('page_data', data.currentPage.toString());
  const take = searchParams?.get('take_data') || 10;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const take = e.currentTarget.value;
    params.set('page_data', '1');
    params.set('take_data', take);
    router.push(`${pathname}?${params.toString()}`);
    router.refresh();
  }

  const handlePage = (value: number) => {
    params.set('page_data', value.toString());
    router.push(`${pathname}?${params.toString()}`);
    router.refresh();
  }

  if (data.total <= 10) return
  return (
    <div className="flex justify-between items-center my-10 px-2">
      <div className="flex gap-4">
        <div>
          { data.total } total items
        </div>
        <select value={take} className="bg-black" onChange={handleChange}>
          <option value="10">10 per page</option>
          <option value="50">50 per page</option>
          <option value="100">100 per page</option>
        </select>
      </div>
      <div className="flex items-center gap-3">
        <div>
          page { data.currentPage > data.totalPages ? data.totalPages : data.currentPage } out of { data.totalPages }
        </div>
        <div className="flex gap-3">
          <button onClick={() => handlePage(data.currentPage - 1)} disabled={data.currentPage <= 1} className='disabled:cursor-not-allowed'>
            <ArrowLeftIcon className={` w-4 h-4 ${data.currentPage <= 1 ? '!fill-gray-600' : 'fill-white'}`} />
          </button>
          <button onClick={() => handlePage(data.currentPage + 1)} disabled={data.currentPage >= data.totalPages} className='disabled:cursor-not-allowed'>
            <ArrowRightIcon className={` w-4 h-4 ${data.currentPage >= data.totalPages ? '!fill-gray-600' : 'fill-white'}`} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pagination
