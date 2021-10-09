import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*', // *通配符匹配所有不存在的路由,一般用于错误页面
    name: '404',
    component: () => import('../views/common/404.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/TestComponent')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
