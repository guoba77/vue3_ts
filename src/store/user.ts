import { defineStore } from 'pinia'
import { Login, getUserInfo } from '@/api/user/index'
import { GET_TOKEN, SET_TOKEN } from '../utils/token'
// defineStore（a,b）  a是给仓库绑定一个唯一的值，b是配置项，类型是对象，有三个参数 state,getters,actions
export const useUserStore = defineStore('myStore', {
  state: () => {
    return {
      userInfo: '',
      current: 1,
      count: 0,
      token: GET_TOKEN(),
    }
  },
  // 相当于一个计算属性 可以在不修改state值的情况下 对值进行一些操作
  getters: {
    newCount(): number {
      return this.count++
    },
    newCurrent: (state) => {
      return '$' + ++state.current
    },
  },
  //可以进行同步异步的提交
  actions: {
    async changeCount(form: any) {
      const res: any = await Login(form)
      console.log(res)
      if (res.code === 200) {
        this.token = res.data.token
        SET_TOKEN(res.data.token)
        return 'ok'
      } else {
        return Promise.reject(new Error(res.data.message))
      }
    },
    async getUserInfoList() {
      const res = await getUserInfo()
      console.log(res)
    },
  },
})
