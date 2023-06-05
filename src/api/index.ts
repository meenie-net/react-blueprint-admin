import { http } from "./http";
import { users } from "./../../mock/user";
import { permisson } from "../../mock/permission";
export interface IResponse {
  code: ResCodeEnum;
  msg: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}
export interface IPaginationRequest {
  pageSize?: number;
  pageNum?: number;
  param?: object;
}

/**
 *** 10000--success
 *** 10001
 *** 20000
 *** 20001
 *** 30000
 *** 40000
 */
export enum ResCodeEnum {
  SUCCESS = 10000,
  NOT_LOGIN = 50000,
}

// 开发环境
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mockFetch(data: any) {
  return new Promise<IResponse>((resolve) => {
    setTimeout(() => {
      resolve({
        code: ResCodeEnum.SUCCESS,
        msg: "成功",
        data,
      });
    }, 1000);
  });
}
export const api = {
  login(data: { username: string; password: string }) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { username } = data;
    return mockFetch({
      username,
      avatar: "",
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  register(_data: { username: string; password: string }) {
    return mockFetch(null);
  },
  getUserList(req: IPaginationRequest) {
    return mockFetch({
      total: users.length,
      pageSize: req.pageSize,
      pageNum: req.pageNum,
      data:
        req.pageNum && req.pageSize
          ? users.slice(
              (req.pageNum - 1) * req.pageSize,
              req.pageNum * req.pageSize
            )
          : users,
    });
  },
  deleteUser(id: string) {
    console.log("id", id);
    return mockFetch(null);
  },
  getPermission() {
    return mockFetch(permisson);
  },
};

// mock环境
const base_url = "http://127.0.0.1:4523/m1/2564219-0-default";
// 测试环境
// const base_url = 'http://127.0.0.1:4523/m1/2564219-0-default'
// 生产环境
// const base_url = 'http://127.0.0.1:4523/m1/2564219-0-default'
export const _api = {
  getUserList() {
    return http.get(base_url + "/user");
  },
};
