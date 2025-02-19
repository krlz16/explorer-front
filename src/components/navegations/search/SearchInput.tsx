'use client';
import { useState, FormEvent, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useSearch } from '@/hooks/useSearch';
import SearchResults from './SearchResults';
import { CloseIcon, SearchIcon } from '@/common/icons';
import { useAppDataContext } from '@/context/AppContext';

const RESPONSIVE_THRESHOLD = 800;

function SearchInput() {
  const pathname = usePathname();
  const { widthScreen } = useAppDataContext();
  const [focus, setFocus] = useState(false);
  const [input, setInput] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const { searchResults, loading, setLoading } = useSearch(input);

  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    setLoading(true);
    setInput(e.currentTarget.value);
  };

  useEffect(() => {
    if (focus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [focus]);

  const handleFocus = () => {
    setFocus(true);
  };

  return (
    <div className="w-full">
      <div
        className={`${pathname === '/' ? 'w-full' : 'px-4 md:pl-0 md:max-w-[1200px] w-full'} w-full h-11 md:ml-0 md:mr-10`}
      >
        {pathname !== '/' && widthScreen <= RESPONSIVE_THRESHOLD && (
          <div className="h-11 flex items-center">
            <button className="flex ml-auto mr-4" onClick={handleFocus}>
              <SearchIcon />
            </button>
          </div>
        )}
        <div
          className={`${focus && widthScreen <= RESPONSIVE_THRESHOLD && pathname !== '/' ? 'fixed w-[85%] m-auto left-0 right-0 top-5' : 'relative'}
         ${!focus && widthScreen <= 800 && pathname !== '/' ? 'hidden' : ''} ${focus ? 'border-white-400' : 'border-gray-700'} border md:flex w-full h-11 bg-secondary justify-between items-center rounded-xl px-4 z-30`}
        >
          <div className="flex items-center h-11 justify-start gap-3 w-full">
            <SearchIcon />
            <input
              ref={inputRef}
              className="w-full bg-secondary text-white outline-none"
              type="text"
              value={input}
              placeholder="Search by address, block, tx, token name, symbol, rns"
              onFocus={() => setFocus(true)}
              onInput={handleInput}
            />
            {input && (
              <button onClick={() => setInput('')}>
                <CloseIcon />
              </button>
            )}
          </div>
        </div>
        {focus && input && (
          <div
            className={`${widthScreen <= RESPONSIVE_THRESHOLD && pathname !== '/' ? 'mt-2 fixed w-[85%] z-30 m-auto left-0 right-0' : 'relative mt-2'} md:w-full bg-secondary min-h-10 z-30 rounded-lg p-4 border border-gray-500 max-h-[80vh] overflow-y-auto`}
          >
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
    </div>
  );
}

export default SearchInput;
