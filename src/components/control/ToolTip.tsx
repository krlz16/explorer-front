'use client'
import { CopyIcon } from '@/common/icons';
import Link from 'next/link';
import React, { useState } from 'react';

type Props = {
  text: string | undefined;
  className?: string;
  trim?: number;
  href?: string
};

const ToolTip: React.FC<Props> = ({ text = '', className = '', trim = 4, href }) => {
  const [copied, setCopied] = useState(false);

  if (!text) return null;
  let maxWith = 'max-w-[250px]';

  if (text.length > 50) maxWith = 'max-w-[400px]';

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

  const renderLinkOrText = (text: string) => {
    return href ? (
      <Link href={href} onClick={handleLinkClick} className="inline-block">
        {text}
      </Link>
    ) : (
      <span>{text}</span>
    );
  };

  return (
    <div className={`relative inline-block ${className} group`}>
      <div className="flex items-center">
        <p>{renderLinkOrText(trim1)}</p>
        <div className='w-4 flex justify-center'>
          <button
            onClick={handleCopy}
            className="group-hover:inline-block hidden"
          >
            <CopyIcon className='fill-white-400 active:fill-white w-4 h-4' />
          </button>
          <p className="group-hover:hidden whitespace-normal">...</p>
        </div>
        <p>{renderLinkOrText(trim2)}</p>
      </div>
      <div className={`absolute ${maxWith}  mb-1 break-words bottom-full left-1/2 transform -translate-x-1/2 px-4 py-2 text-sm shadow-lg shadow-zinc-900 bg-primary rounded-lg opacity-0 hidden group-hover:opacity-100 group-hover:block transition-all duration-300 z-10`}>
        {copied ? 'Copied' : text}
      </div>
    </div>
  );
};

export default ToolTip;
