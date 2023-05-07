import { http } from "./http";
import { users } from './../../mock/user';
// 开发环境
function mockFetch(data:any){
	return new Promise<ResType>((resolve)=>{
    setTimeout(() => {
			resolve({
				code: 10000,
				msg: '成功',
				data
			})
		},1000)
	})
}
export const api = {
  getUser(req: PaginationRequest) {
    console.log('req',req)
		return mockFetch({
			total: users.length,
			pageSize: 5,
			data: users
		})
  },
}

// mock环境
const base_url = 'http://127.0.0.1:4523/m1/2564219-0-default'
// 测试环境
// const base_url = 'http://127.0.0.1:4523/m1/2564219-0-default'
// 生产环境
// const base_url = 'http://127.0.0.1:4523/m1/2564219-0-default'
export const _api = {
	getUser(){ return http.get(base_url + '/user') }
}
