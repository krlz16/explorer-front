'use client';
import { IEvents } from '@/common/interfaces/IEvents';
import { IInternalTxs, ITxs } from '@/common/interfaces/Txs';
import { createContext, useContext, useState } from 'react';

interface DataContextType {
  tx: ITxs | undefined;
  itxsData: IInternalTxs[] | undefined;
  setItxsData: React.Dispatch<React.SetStateAction<IInternalTxs[] | undefined>>;
  tokensData: IEvents[] | undefined;
  setTokensData: React.Dispatch<React.SetStateAction<IEvents[] | undefined>>;
}
const DataContext = createContext<DataContextType | undefined>(undefined);

export const TxsDataContextProvider = ({
  tx,
  children,
}: {
  tx: ITxs | undefined;
  children: React.ReactNode;
}) => {
  const [itxsData, setItxsData] = useState<IInternalTxs[] | undefined>(
    undefined,
  );
  const [tokensData, setTokensData] = useState<IEvents[] | undefined>(
    undefined,
  );

  return (
    <DataContext.Provider
      value={{
        tx,
        itxsData,
        setItxsData,
        tokensData,
        setTokensData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useTxsDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider');
  }
  return context;
};
