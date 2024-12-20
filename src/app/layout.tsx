import type { Metadata } from "next";
import './globals.css'
import Sidebar from "@/components/navegations/Sidebar";

export const metadata: Metadata = {
  title: "Explorer",
  description: "RSK Explorer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <div className="w-full px-5">
          {children}
        </div>
      </body>
    </html>
  );
}
