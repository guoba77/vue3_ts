import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoutes } from './routes'
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
})

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('guoba_Token')) {
    if (to.path !== '/login') {
      next('/login')
    }
    next()
  } else {
    if (to.path === '/login') {
      next('/home')
    }
  }
  next()
  // to and from are both route objects. must call `next`.
})
export default router
