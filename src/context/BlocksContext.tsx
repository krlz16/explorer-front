'use client';
import React, { createContext, useContext, useState } from 'react';
import { IBlocks } from '@/common/interfaces/Blocks';
import { ITxs, IInternalTxs } from '@/common/interfaces/Txs';
import { INavigation } from '@/common/interfaces/IResponse';

interface DataContextType {
  block: IBlocks | undefined;
  navigation: INavigation | undefined;
  txsData: ITxs[] | undefined;
  setTxsData: React.Dispatch<React.SetStateAction<ITxs[] | undefined>>;
  itxsData: IInternalTxs[] | undefined;
  setItxsData: React.Dispatch<React.SetStateAction<IInternalTxs[] | undefined>>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const BlocksDataProvider = ({
  block,
  navigation,
  children,
}: {
  block: IBlocks | undefined;
  navigation: INavigation | undefined;
  children: React.ReactNode;
}) => {
  const [txsData, setTxsData] = useState<ITxs[] | undefined>(undefined);
  const [itxsData, setItxsData] = useState<IInternalTxs[] | undefined>(
    undefined,
  );

  return (
    <DataContext.Provider
      value={{
        block,
        navigation,
        txsData,
        setTxsData,
        itxsData,
        setItxsData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useBlocksDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider');
  }
  return context;
};
