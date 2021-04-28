import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import rem from './assets/js/rem' // 引入rem.js
import './assets/css/reset.css' // 引入样式清空css

Vue.prototype.axios = Axios // 把数据请求的axios方法绑定在vue的原型对象上
Vue.use(rem)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
