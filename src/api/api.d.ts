interface ResType {
  code: ResCode;
  msg: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}
interface PaginationRequest {
  pageSize?: number;
  pageNum?: number;
  param?: object = {};
}
interface PaginationResponse<T> {
  pageSize: number;
  pageNum: number;
  total: number;
  data: T[];
}
