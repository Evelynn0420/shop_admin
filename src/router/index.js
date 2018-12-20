import Vue from 'vue'
import Router from 'vue-router'
import Login from 'components/Login'
// 导入home
import Home from 'components/Home'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home
    }
  ]
})

// 给router对象注册一个导航守卫
// 将来所有的导航都要经过beforeeach
// next是否方向 next():表示直接放行 next('/login')跳转到
router.beforeEach((to, from, next) => {
  // 去登录页直接放行
  if (to.path === '/login') {
    // 直接放行
    next()
    return
  }
  // 如果不是登录，判断是否有token，如果有放行，如果没有去登录
  let token = localStorage.getItem('token')
  if (token) {
    next()
  } else {
    next('/login')
  }
})

export default router
