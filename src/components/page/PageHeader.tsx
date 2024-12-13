'use client'
import React from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ReturIcon } from "@/common/icons";
import Card from "../generals/Card";
import Button from "../generals/Button";

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
  title: string;
  buttons: ButtonProps[];
  themeBtn: string;
  children?: React.ReactNode;
  tabContents: TabContent[];
  navigationsBtns?: React.ReactNode
  titleColor: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ breadcrumb, icon, title, buttons, themeBtn, tabContents, navigationsBtns, titleColor }) => {

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams?.toString());
  const currentTap = searchParams?.get("_ctab") || buttons[0].tab;

  const currentContent = tabContents.find((tab) => tab.tab === currentTap)?.content;

  const handleTabClick = (label: string) => {
    const tabParam = label.toLowerCase();
    params.set('_ctab', tabParam);
    router.push(`${pathname}?${params}`);
  };

  return (
    <Card className="w-full mt-6">
      <div className="rounded-xl">
        <Link href={breadcrumb.path} className={`flex items-center gap-2 cursor-pointer mb-6 text-sm text-brand-green text-${titleColor}`}>
          <ReturIcon className={`fill-${titleColor}`} />
          { `All ${breadcrumb.name}` }
        </Link>
        <div className="flex justify-between">
          <h1 className="flex gap-3 items-center text-3xl font-medium">
            {icon} {title}
          </h1>
          { navigationsBtns }
        </div>
        <div className="mt-7 flex gap-2">
          {buttons.map((button, index) => (
            <Button
              key={index}
              label={button.label}
              className={currentTap === button.tab ? themeBtn : ""}
              onClick={() => handleTabClick(button.tab)}
            />
          ))}
        </div>
      </div>
      <div className="mt-5">{currentContent}</div>
    </Card>
  );
};

export default PageHeader;
