'use client';
import { useState, FormEvent } from 'react';
import { usePathname } from 'next/navigation';
import { useSearch } from '@/hooks/useSearch';
import SearchResults from './SearchResults';
import { SearchIcon } from '@/common/icons';

function SearchInput() {
  const pathname = usePathname();
  const [focus, setFocus] = useState(false);
  const [input, setInput] = useState('');

  const { searchResults, loading, setLoading } = useSearch(input);

  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    setLoading(true);
    setInput(e.currentTarget.value);
  };

  return (
    <div className={`${pathname === '/' ? 'w-full' : 'w-[600px]'} relative`}>
      <div className={`${focus ? 'border border-white-100' : 'border border-transparent'} flex gap-2 items-center px-3 relative z-30 rounded-xl bg-secondary h-11`}>
        <SearchIcon />
        <input
          className="w-full bg-secondary text-white outline-none"
          type="text"
          value={input}
          placeholder="Search by address, block, tx, token name, symbol, rns"
          onFocus={() => setFocus(true)}
          onInput={handleInput}
        />
      </div>
      {focus && input && (
        <div className="w-full bg-secondary min-h-10 z-30 relative mt-2 rounded-lg p-4 border border-gray-500">
          <SearchResults
            loading={loading}
            inputValue={input}
            searchResults={searchResults!}
            setInput={setInput}
          />
        </div>
      )}
      {focus && (
        <div
          role="button"
          tabIndex={0}
          onClick={() => setFocus(false)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') setFocus(false);
          }}
          className="w-screen h-screen z-20 fixed top-0 left-0 bg-[rgba(0,0,0,0.8)]"
        ></div>
      )}
    </div>
  );
}

export default SearchInput;
