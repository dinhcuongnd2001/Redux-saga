export interface PaginationParams {
  _limit: number;
  _page: number;
  _total: number;
}

export interface ListResponse<T> {
  data: T[];
  pagination: PaginationParams;
}

export interface listParams {
  _page: number;
  _limit: number;
  _sort: number;
  _order: "asc" | "des";
  [key: string]: any;
}
