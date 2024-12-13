// useFetch.tsx
'use client'
import { fetchData } from "@/app/lib/data";
import { useEffect, useState } from "react";

interface IPagination {
  currentPage: number
  total: number
  totalPages: number
}
type Data<T> = {
  data: T | undefined
  pagination: IPagination
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

  const fetchingData = async () => {
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
  }
  useEffect(() => {
    const controller = new AbortController();

    fetchingData();

    return () => {
      controller.abort();
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading, error }
}

export default useFetch;
