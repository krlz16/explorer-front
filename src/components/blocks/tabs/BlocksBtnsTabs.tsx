'use client';
import Button from '@/components/ui/Button';
import React from 'react';
import { BLOCKS_URL_TABS } from './BlocksTabs';
import { useTab } from '@/hooks/useTab';

function BlocksBtnsTabs() {
  const { changeTab, currentTab } = useTab({
    defaultTab: BLOCKS_URL_TABS[0].tab,
  });

  return (
    <div className="my-4 flex">
      {BLOCKS_URL_TABS.map((btn, i) => (
        <Button
          key={i}
          label={btn.label}
          onClick={() => changeTab(btn.tab)}
          className={currentTab === btn.tab ? 'bg-brand-green text-black' : ''}
        />
      ))}
    </div>
  );
}

export default BlocksBtnsTabs;
