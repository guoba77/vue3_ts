import request from '../../utils/request'
import { loginForm, loginInfo } from './type'
export function Login(data: loginForm) {
  return request<any, loginInfo>({
    method: 'post',
    url: '/user/login',
    data: data,
  })
}
export function getUserInfo() {
  return request({
    method: 'get',
    url: '/user/info',
  })
}
