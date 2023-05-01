import { http } from "./http";
import { users } from './../../mock/user';
// 开发环境
function mockFetch<T>(data:T[]){
	return new Promise<{code: 200|400,msg: '成功'|"失败",data:T[]}>((resolve)=>{
    setTimeout(() => {
			resolve({
				code: 200,
				msg: '成功',
				data
			})
		},1000)
	})
}
export const api = {
  getUser(req: PaginationRequest) {
    // console.log('req',req)
    return mockFetch<User>(users)
  },
}

// mock环境
const base_url = 'http://127.0.0.1:4523/m1/2564219-0-default'
// 测试环境
// const base_url = 'http://127.0.0.1:4523/m1/2564219-0-default'
// 生产环境
// const base_url = 'http://127.0.0.1:4523/m1/2564219-0-default'
export const _api = {
	getUser(){ return http.get(base_url + '/brand') }
}
