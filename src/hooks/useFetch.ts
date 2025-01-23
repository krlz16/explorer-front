// useFetch.tsx
'use client'
import { fetchData } from "@/services/api";
import { useCallback, useEffect, useState } from "react";

interface IPagination {
  currentPage: number
  total: number
  totalPages: number
}
export interface INavigation {
  next: number | string | undefined
  prev: number | string | undefined
}

type Data<T> = {
  data: T | undefined
  pagination?: IPagination
  navigation?: INavigation
} | null;

type ErrorType = Error | null;

interface Params<T> {
  data: Data<T> | undefined
  loading: boolean
  error: ErrorType
}

const useFetch = <T>(url: string): Params<T> => {
  const [data, setData] = useState<Data<T>>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<ErrorType>(null);

  const fetchingData = useCallback(async () => {
    setData(null);
    setLoading(true);
    setError(null);
    try {
      const response = await fetchData<T>(url);
      setData(response);
    } catch (error) {
      setError(error as ErrorType);
    } finally {
      setLoading(false);
    }
  }, [url])

  useEffect(() => {
    const controller = new AbortController();

    fetchingData();

    return () => {
      controller.abort();
    }

  }, [fetchingData, url]);

  return { data, loading, error }
}

export default useFetch;
