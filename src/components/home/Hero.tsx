import React from 'react';
import { PUBLIC_DOMAIN } from '@/common/constants';
import SearchInput from '../navegations/search/SearchInput';

function Hero() {
  return (
    <div className="mt-5 w-full">
      <h1 className="text-3xl md:text-4xl font-bold my-4">
        Rootstock <span className="capitalize">{PUBLIC_DOMAIN}</span> Explorer
      </h1>
      <SearchInput />
    </div>
  );
}

export default Hero;
