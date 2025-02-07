'use client'
import { ROUTER } from '@/common/constants';
import { CopyIcon } from '@/common/icons';
import { getRouteStyles } from '@/common/utils/RouteColors';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

type RouteType = 'block' | 'address' | 'hash' | 'itx' | 'empty';

type Props = {
  text: string | undefined;
  className?: string;
  trim?: number;
  type?: RouteType;
  showCopy?: boolean
};


const ToolTip: React.FC<Props> = ({ text = '', className = '', trim = 4, type = 'empty', showCopy = true }) => {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);

  if (!text) return null;

  const trim1 = text.substring(0, trim);
  const trim2 = text.substring(text.length - trim);

  const handleCopy = (event: React.MouseEvent) => {
    event.stopPropagation();
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleLinkClick = (event: React.MouseEvent) => {
    const isCopyButtonClicked = (event.target as HTMLElement).closest('button');
    if (isCopyButtonClicked) {
      event.preventDefault();
    }
  };

  const renderLinkOrText = (value: string, type: RouteType) => {
    const ROUTE_MAP = {
      block: `${ROUTER.BLOCKS.INDEX}/${text}`,
      address: `${ROUTER.ADDRESSES.INDEX}/${text}`,
      hash: `${ROUTER.TXS.INDEX}/${text}`,
      itx: `${ROUTER.ITXS.INDEX}/${text}`,
      empty: undefined
    }
    return ROUTE_MAP[type] ? (
      <Link href={ROUTE_MAP[type]} onClick={handleLinkClick} className="inline-block">
        {value}
      </Link>
    ) : (
      <span>{value}</span>
    );
  };

  const { text: textColor } = getRouteStyles(pathname);

  return (
    <div className={`relative inline-block ${className} group ${textColor}`}>
      <div className="flex items-center">
        {trim > 0 ?
          (<>
            <p>{renderLinkOrText(trim1, type)}</p>
            <div className='w-4 flex justify-center'>
              <p className="whitespace-normal">...</p>
            </div>
            <p>{renderLinkOrText(trim2, type)}</p>
          </>)
          : (<span>{text}</span>)
        }
        {showCopy &&
          (<button
            onClick={handleCopy}
            className="ml-1"
          >
            <CopyIcon className='fill-white-400 active:fill-white w-4 h-4' />
          </button>)
        }
      </div>
      {showCopy &&
        (<div className={`
          absolute ${text.length > 50 ? 'max-w-[400px]' : 'max-w-[250px]'} mb-2 break-words bottom-full min-w-[80px] -right-8 text-center transform px-4 py-2 text-sm shadow-lg shadow-zinc-900 bg-gray-600 rounded-lg hidden group-hover:opacity-100 group-hover:block transition-all duration-300 z-10
          after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-gray-600
        `}>
          {copied ? 'Copied' : 'Copy'}
        </div>)
      }
    </div>
  );
};

export default ToolTip;
