'use client';
import { parseDecimals } from '@/common/utils/ParseDecimals';
import ToolTip from '@/components/ui/ToolTip';
import Card from '@/components/ui/Card';
import React from 'react';
import { useAppDataContext } from '@/context/AppContext';
import Date from '@/components/ui/Date';
import Block from '@/components/blocks/Block';

function LastBlock() {
  const { lastBlock: block } = useAppDataContext();

  if (!block)
    return (
      <Card className="bg-secondary w-1/2 h-50 flex flex-col animate-pulse">
        <div className="text-lg flex gap-2 items-center">
          <div className="w-20 h-4 bg-zinc-800 rounded-xl"></div>
          <div className="w-10 h-3 bg-zinc-800 rounded-xl"></div>
        </div>
        <div className="flex flex-1 items-end mb-4">
          <div>
            <div className="w-28 h-5 bg-zinc-800 rounded-xl mb-6"></div>
            <div className="flex gap-3 items-center text-white-400">
              <div className="w-16 h-3 bg-zinc-800 rounded-xl"></div>
              <div className="w-16 h-3 bg-zinc-800 rounded-xl"></div>
              <div className="w-16 h-3 bg-zinc-800 rounded-xl"></div>
              <div className="w-16 h-3 bg-zinc-800 rounded-xl"></div>
            </div>
          </div>
        </div>
      </Card>
    );
  return (
    <Card className="bg-secondary w-full md:w-1/2 h-50 flex flex-col">
      <div className="text-lg flex items-center gap-2">
        Last Block
        <span className="text-sm text-white-400">
          <Date date={block.timestamp} mode="timer" />
        </span>
      </div>
      <div className="flex flex-1 items-end mb-4">
        <div>
          <div className="text-[41px] font-medium">
            <Block number={block.number} />
          </div>
          <div className="mt-3 text-white-400 w-fit">
            <div className="flex gap-2">
              Miner
              <ToolTip text={block?.miner} showCopy={false} type="address" />
            </div>
            <div className="flex w-full justify-between gap-2 items-center mt-1">
              <div>{`${block.transactions} txns`}</div>
              <span className="border-r-2 h-4 border-r-line"></span>
              <div>{`${parseDecimals(block.txDensity)} txs/s`}</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default LastBlock;
