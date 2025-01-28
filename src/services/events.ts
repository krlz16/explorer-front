import { IEvents } from "@/common/interfaces/IEvents";
import { fetchData } from "./api";
import { ROUTER } from "@/common/constants";

export async function fetchTransferEventByTxhash(hash: string) {
  const response = await fetchData<IEvents[]>(`${ROUTER.EVENTS.TX}/${hash}`);
  return response;
}

export async function fetchEventsByAddress(address: string) {
  const response = await fetchData<IEvents[]>(`${ROUTER.EVENTS.ADDRESS}/${address}`);
  return response;
}