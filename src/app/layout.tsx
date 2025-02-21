import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/navegations/Sidebar';
import Header from '@/components/navegations/Header';
import { AppDataProvider } from '@/context/AppContext';
import Web3Provider from '@/context/Web3Provider';
import Footer from '@/components/home/Footer';

export const metadata: Metadata = {
  title: 'Explorer',
  description: 'RSK Explorer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Web3Provider>
        <body className="w-full xxl:max-w-[2000px] xxl:m-auto">
          <AppDataProvider>
            <div className="flex">
              <Sidebar />
              <div className="w-full px-5">
                <Header />
                {children}
              </div>
            </div>
            <Footer />
          </AppDataProvider>
        </body>
      </Web3Provider>
    </html>
  );
}
