import type { Metadata } from "next";
import './globals.css'
import Sidebar from "@/components/navegations/Sidebar";
import Header from "@/components/navegations/Header";
import { AppDataProvider } from "@/context/AppContext";

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
        <AppDataProvider>
          <Sidebar />
          <div className="w-full px-5">
            <Header />
            {children}
          </div>
        </AppDataProvider>
      </body>
    </html>
  );
}
