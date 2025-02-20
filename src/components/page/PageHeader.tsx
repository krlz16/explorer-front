'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ReturIcon } from '@/common/icons';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface BreadcrumbProps {
  name: string;
  path: string;
}

interface ButtonProps {
  label: string;
  tab: string;
}

interface TabContent {
  tab: string;
  content: React.ReactNode;
}

interface PageHeaderProps {
  breadcrumb: BreadcrumbProps;
  icon: React.ReactNode;
  title: string | undefined;
  buttons: ButtonProps[];
  themeBtn: string;
  children?: React.ReactNode;
  tabContents: TabContent[];
  navigationsBtns?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  breadcrumb,
  icon,
  title,
  buttons,
  themeBtn,
  tabContents,
  navigationsBtns,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams?.toString());
  const currentTab = searchParams?.get('_ctab') || buttons[0]?.tab;

  const currentContent = tabContents.find(
    (tab) => tab.tab === currentTab,
  )?.content;

  const handleTab = (label: string) => {
    const tabParam = label.toLowerCase();
    params.set('_ctab', tabParam);
    router.push(`${pathname}?${params}`);
  };

  return (
    <Card className="w-full mt-6">
      <div className="rounded-xl">
        <Link
          href={breadcrumb.path}
          className={`flex items-center gap-2 cursor-pointer mb-6 text-sm text-brand-orange`}
        >
          <ReturIcon className="fill-brand-orange" />
          All {breadcrumb.name}
        </Link>
        <div className="flex justify-between">
          <h1 className="flex gap-3 items-center text-3xl font-medium">
            {icon} {title}
          </h1>
          {navigationsBtns}
        </div>
        <div className="mt-7 flex gap-2">
          {buttons.map((button, index) => (
            <Button
              key={index}
              label={button.label}
              className={currentTab === button.tab ? themeBtn : ''}
              onClick={() => handleTab(button.tab)}
            />
          ))}
        </div>
      </div>
      <div className="mt-5">{currentContent}</div>
    </Card>
  );
};

export default PageHeader;
