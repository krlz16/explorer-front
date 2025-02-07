'use client';
import { useState, FormEvent } from 'react';
import { usePathname } from 'next/navigation';
import { useSearch } from '@/hooks/useSearch';
import SearchResults from './search/SearchResults';

function Navbar() {
  const pathname = usePathname();
  const [focus, setFocus] = useState(false);
  const [input, setInput] = useState('');

  const { searchResults, loading, setLoading } = useSearch(input);

  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    setLoading(true);
    setInput(e.currentTarget.value.trim());
  };

  return (
    <div
      className={`${pathname === '/' ? 'w-full' : 'w-[600px]'} mt-5 relative`}
    >
      <input
        className="w-full h-11 rounded-lg bg-secondary text-white px-3 py-2 relative z-50"
        type="text"
        value={input}
        placeholder="Search by Token, Block, Symbol, Rns"
        onFocus={() => setFocus(true)}
        onInput={handleInput}
      />
      {focus && input && (
        <div className="w-full bg-secondary min-h-10 z-50 relative mt-2 rounded-lg p-4 border border-gray-500">
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
          className="w-screen h-screen z-40 fixed top-0 left-0 bg-[rgba(0,0,0,0.8)]"
        ></div>
      )}
    </div>
  );
}

export default Navbar;
