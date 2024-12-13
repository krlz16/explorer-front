// Definición de la interfaz para searchParams
export interface ISearchParams {
  page_data?: string;  // Parámetro opcional de tipo string
  currentPage?: string; // Parámetro opcional de tipo string
  take_data?: string;   // Parámetro opcional de tipo string
}

export interface IPageProps {
  searchParams: Promise<ISearchParams>; // La propiedad searchParams es ahora una promesa
}