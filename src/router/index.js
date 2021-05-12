import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/views/index/index' // 首页组件
import topsong from '@/views/topsongs/index' // 排行榜
import topdetail from '@/views/topdetail/index' // 排行榜详情

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Index',
  component: index
}, {
  path: '/top',
  name: 'topsong',
  component: topsong
}, {
  path: '/topdetail/:name',
  name: 'topdatail',
  component: topdetail
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
