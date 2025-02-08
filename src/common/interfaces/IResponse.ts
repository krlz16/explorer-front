export interface IPagination {
  currentPage: number;
  total: number;
  totalPages: number;
}

interface IBlocksPagination {
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
  paginationBlocks?: IBlocksPagination;
  navigation?: INavigation;
} | null;
