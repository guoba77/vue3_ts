import { createApp } from 'vue'
import './style/index.scss'
import { createPinia } from 'pinia'
import 'virtual:svg-icons-register'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// import SvgIcon from './components/SvgIcon.vue'
import register from './components'
import router from './router.ts'
import axios from 'axios'
const app = createApp(App)
// app.component('SvgIcon', SvgIcon)
app.use(createPinia())
app.use(register)
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(router)
axios({
  url: '/api/user/login',
  method: 'post',
  data: {
    username: 'system',
    password: '111111',
  },
})
app.mount('#app')
