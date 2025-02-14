'use server'

import { API_URL, EAS_API_URL } from "@/common/constants";
import { DataResponse } from "@/common/interfaces/IResponse";

export async function fetchData<T>(url: string, params?: object, revalidate: number = 60): Promise<DataResponse<T>> {
  try {
    const queryString = params
    ? '?' + new URLSearchParams(params as Record<string, string>).toString()
    : '';
    const PATH_URL = `${API_URL}${url}${queryString}`;
    const response = await fetch(PATH_URL, {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      next: {
        revalidate
      },
      ...params
    });

    if (!response.ok) {
      throw new Error('Fetch error');
    }

    const data = await response.json();
    return data as DataResponse<T>;
  } catch (error) {
    console.log('error: ', error);
    throw new Error('fetch error');
  }
}
export async function fetchGraphQL<T>(query: string, variables?: object): Promise<DataResponse<T>> {
  debugger;
  try {
    const response = await fetch(EAS_API_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      console.log('response: ', response);
      throw new Error('Fetch error');
    }

    const data = await response.json();    
    return data as DataResponse<T>;
  } catch (error) {
    console.log('error: ', error);
    throw new Error('fetch error');
  }
}
