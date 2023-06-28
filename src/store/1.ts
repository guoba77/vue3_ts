import { defineStore } from 'pinia'

// defineStore（a,b）  a是给仓库绑定一个唯一的值，b是配置项，类型是对象，有三个参数 state,getters,actions
export const useStore = defineStore('myStore', {
  state: () => {
    return {
      current: 1,
      count: 0,
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
    changeCount() {
      setTimeout(() => {
        this.count++
      }, 1000)
    },
  },
})
