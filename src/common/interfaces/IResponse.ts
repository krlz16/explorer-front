export interface IPagination {
  currentPage: number;
  total: number;
  totalPages: number;
}

interface IPaginationData {
  nextCursor: number | null;
  prevCursor: number | null;
  take: number;
}

export interface INavigation {
  next: number | string | undefined;
  prev: number | string | undefined;
}

export type DataResponse<T> = {
  data: T;
  pagination?: IPagination;
  paginationData?: IPaginationData;
  navigation?: INavigation;
} | null;
