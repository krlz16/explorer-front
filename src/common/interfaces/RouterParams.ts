export interface ISearchParams {
  page_data?: string;
  currentPage?: string;
  take_data?: string;
}

export interface IPageProps {
  searchParams: Promise<ISearchParams>;
}
