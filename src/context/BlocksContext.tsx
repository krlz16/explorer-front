'use client'
import React, { createContext, useContext, useState } from "react";
import { IBlocks } from "@/common/interfaces/Blocks";
import { ITxs, IInternalTxs } from "@/common/interfaces/Txs";

interface DataContextType {
  blockData: IBlocks | undefined;
  setBlockData: React.Dispatch<React.SetStateAction<IBlocks | undefined>>;
  txsData: ITxs[] | undefined;
  setTxsData: React.Dispatch<React.SetStateAction<ITxs[] | undefined>>;
  itxsData: IInternalTxs[] | undefined;
  setItxsData: React.Dispatch<React.SetStateAction<IInternalTxs[] | undefined>>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const BlocksDataProvider = ({ children }: { children: React.ReactNode }) => {
  const [blockData, setBlockData] = useState<IBlocks | undefined>(undefined);
  const [txsData, setTxsData] = useState<ITxs[] | undefined>(undefined);
  const [itxsData, setItxsData] = useState<IInternalTxs[] | undefined>(undefined);

  return (
    <DataContext.Provider
      value={{
        blockData,
        setBlockData,
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
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};
