/**
 *** 10000--success
 *** 10001
 *** 20000
 *** 20001
 *** 30000
 *** 40000
 */
type ResCode = 10000 | 10001 | 20000 | 20001 | 30000 | 40000;
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
