'use client'
import { IAddresses, IContractDetail } from "@/common/interfaces/Addresses";
import { createContext, useContext, useState } from "react";

interface DataContextType {
  address: IAddresses | undefined
  contractDetail: IContractDetail | undefined
  setContractDetail: React.Dispatch<React.SetStateAction<IContractDetail | undefined>>;
  
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const AddressDataProvider = (
  {
    address,
    children
}: {
  address: IAddresses | undefined,
  children: React.ReactNode,
 }) => {
  const [contractDetail, setContractDetail] = useState<IContractDetail | undefined>(undefined);
  return (
    <DataContext.Provider
      value={{
        address,
        contractDetail,
        setContractDetail,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export const useAddressDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
}