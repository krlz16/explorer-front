'use server'

import { API_URL } from "@/common/constants";
import { DataResponse } from "@/common/interfaces/IResponse";

// import { axiosInstance } from "@/common/config/axios";

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

// export async function fetchData<T>(url: string, params?: object): Promise<Data<T>> {
//   try {
//     const response = await axiosInstance.get(`${url}`, {
//       params
//     });
//     // await new Promise((res) => setTimeout(() => res(''), 3000));
//     return response.data;
//   } catch (error) {
//     console.log('error: ', error);
//     throw new Error('fetch error')
//   }
// }