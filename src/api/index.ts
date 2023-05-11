import { http } from "./http";
import { users } from "./../../mock/user";
import { ResCode } from "../enums/http";
// 开发环境
function mockFetch(data: any) {
  return new Promise<ResType>((resolve) => {
    setTimeout(() => {
      resolve({
        code: ResCode.SUCCESS,
        msg: "成功",
        data,
      });
    }, 1000);
  });
}
export const api = {
  getUserList(req: PaginationRequest) {
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
    return mockFetch(null);
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
