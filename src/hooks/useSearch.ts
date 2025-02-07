import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { isAddress, isTxOrBlockHash } from '@rsksmart/rsk-utils';
import { isHexString, add0x } from '@rsksmart/rsk-utils';
import { fetchTxsByHash } from '@/services/transactions';
import { fetchOneBlock } from '@/services/blocks';
import { fetchTokenByNameOrSymbol } from '@/services/tokens';
import { fetchAddress } from '@/services/addresses';
import { useAppDataContext } from '@/context/AppContext';
import { isValidBlockNumber } from '@/common/utils/Validation';
import { getRnsAddress } from '@/common/utils/Rns';
import { IBlocks } from '@/common/interfaces/Blocks';
import { IAddresses } from '@/common/interfaces/Addresses';
import { ITxs } from '@/common/interfaces/Txs';
import { ITokens } from '@/common/interfaces/Tokens';

interface ISearchResult {
  block: IBlocks | undefined;
  address: IAddresses | undefined;
  tx: ITxs | undefined;
  tokens: ITokens[] | undefined;
  rnsAddress: string;
  searchType: string;
  isResult: boolean;
}

const InitialResult: ISearchResult = {
  block: undefined,
  address: undefined,
  tx: undefined,
  tokens: undefined,
  rnsAddress: '',
  searchType: '',
  isResult: false,
};

export function useSearch(input: string) {
  const { lastBlock } = useAppDataContext();
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] =
    useState<ISearchResult>(InitialResult);

  const [debouncedValue] = useDebounce(input, 1000);

  useEffect(() => {
    if (debouncedValue) {
      fetchSearchData(debouncedValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  const fetchSearchData = async (value: string) => {
    const number = isValidBlockNumber(value, lastBlock!.number!);
    const isHex = isHexString(value);
    const hex = isHex && add0x(value);
    const address = hex && isAddress(value);
    const hash = isTxOrBlockHash(value);

    const results: ISearchResult = InitialResult;

    if (value.match(/.rsk/)) {
      try {
        const response = await getRnsAddress(value);
        results.rnsAddress = response.toLowerCase() || null;
        results.searchType = 'Rns';
        results.isResult = !!response;
      } catch {
        results.searchType = '';
        results.isResult = false;
      }
    } else if (number.isBlock) {
      results.searchType = 'Block';
      const response = await fetchOneBlock(number.block!);
      results.block = response?.data;
      results.isResult = !!response?.data;
    } else if (address) {
      results.searchType = 'Address';
      const response = await fetchAddress(value);
      results.address = response?.data;
      results.isResult = !!response?.data;
    } else if (hash) {
      const hashResults = await fetchHashData(value);
      if (hashResults.block) {
        results.searchType = 'Block';
        results.block = hashResults.block;
        results.isResult = !!hashResults.block;
      } else if (hashResults.tx) {
        results.searchType = 'Transaction';
        results.tx = hashResults.tx;
        results.isResult = !!hashResults.tx;
      }
    } else {
      results.searchType = 'Tokens';
      const response = await fetchTokenByNameOrSymbol(value);
      results.tokens = response?.data;
      results.isResult = !!response?.data;
    }
    setSearchResults(results);
    setLoading(false);
  };

  const fetchHashData = async (hash: string) => {
    const [block, tx] = await Promise.all([
      fetchOneBlock(hash),
      fetchTxsByHash(hash),
    ]);
    return {
      block: block?.data || null,
      tx: tx?.data || null,
    };
  };

  return { searchResults, loading, setLoading };
}
