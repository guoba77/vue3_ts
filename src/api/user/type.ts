export interface loginForm {
  username: string
  password: string
}
// 用户返回数据类型
export interface loginInfo {
  code: number
  data: data
}
interface data {
  token: string
}
