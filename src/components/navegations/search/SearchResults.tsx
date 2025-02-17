import { ROUTER } from '@/common/constants';
import RenderIcon from '@/common/icons/RenderIcon';
import { IAddresses } from '@/common/interfaces/Addresses';
import { IBlocks } from '@/common/interfaces/Blocks';
import { ITokens } from '@/common/interfaces/Tokens';
import { ITxs } from '@/common/interfaces/Txs';
import { parseDecimals } from '@/common/utils/ParseDecimals';

interface ISearchResult {
  block: IBlocks | undefined;
  address: IAddresses | undefined;
  tx: ITxs | undefined;
  tokens: ITokens[] | undefined;
  rnsAddress: string;
  searchType: string;
  isResult: boolean;
}

interface ISearchResultsProps {
  searchResults: ISearchResult;
  inputValue: string;
  setInput: (input: string) => void;
  loading: boolean;
}

const SearchResults = ({
  searchResults,
  setInput,
  inputValue,
  loading,
}: ISearchResultsProps) => {
  const { address, block, tokens, tx, searchType, rnsAddress, isResult } =
  searchResults;
  let href = '';
  let label = '';

  if (loading) return <div>Loading</div>;
  if (!isResult) return <div>No results found.</div>;

  switch (searchType) {
    case 'Block':
      href = `${ROUTER.BLOCKS.INDEX}/${block?.number}`;
      break;
    case 'Address':
      href = `${ROUTER.ADDRESSES.INDEX}/${address?.address}`;
      label = `${address?.address}`;
      break;
    case 'Transaction':
      href = `${ROUTER.TXS.INDEX}/${tx?.hash}`;
      label = `${tx?.hash.toString().substring(0, tx?.hash.toString().length - 10)}...`;
      break;
    case 'Tokens':
      href = `${ROUTER.TXS.INDEX}/${searchResults}`;
      break;
    case 'Rns':
      href = `${ROUTER.ADDRESSES.INDEX}/${rnsAddress}`;
      label = `${inputValue}`;
      break;
    default:
      return null;
  }

  return (
    <div>
      {searchType && searchType !== 'Tokens' && (
        <a href={href} onClick={() => setInput('')}>
          <div className="text-white-400">{searchType}</div>
          <div className="hover:underline text-white-100 flex items-center gap-4 mt-5">
            <div>
              <RenderIcon type={searchType} />
            </div>
            <div className="flex gap-4">
              {searchType === 'Block' ? (
                <>
                  <div>{parseDecimals(block?.number)}</div>
                  <div className='text-white-400'>{`${block?.hash.substring(0, block.hash.length - 22)}...`}</div>
                </>
              ) : (
                label
              )}
            </div>
          </div>
        </a>
      )}
      {searchType === 'Tokens' && (
        <>
          {tokens?.length ? (
            <>
              <div className="text-white-400 mb-5">{searchType}</div>
              {tokens?.map((tk, i) => {
                const name = tk.symbol + tk.name;
                return (
                  <a
                  key={i}
                  href={`${ROUTER.ADDRESSES.INDEX}/${tk?.address}`}
                  onClick={() => setInput('')}
                  className="hover:underline flex items-center gap-4"
                >
                  <div>
                    <RenderIcon type={searchType} />
                  </div>
                  <div className="md:flex gap-2 w-full flex-wrap">
                    <div className='md:w-[20%] flex gap-1'>
                      <span className='text-white-400'>({tk.symbol})</span>
                      { name.length < 20 ? tk.name : `${tk.name.substring(0, 10)}...` }
                    </div>
                    <div className='md:w-[60%] text-white-400'>
                      {tk.address}
                    </div>
                  </div>
                </a>
                )
              })}
            </>
          ) : (
            <>No results found.</>
          )}
        </>
      )}
    </div>
  );
};

export default SearchResults;
