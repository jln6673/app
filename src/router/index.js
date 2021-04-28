import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/views/index/index' // 首页组件

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Index',
  component: index
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
