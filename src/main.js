import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import rem from './assets/js/rem' // 引入rem.js
import './assets/css/reset.css' // 引入样式清空css
import Axios from 'axios' // 引入axios插件
import Vant from 'vant' // 引入vant插件
import 'vant/lib/index.css' // 引入vant插件所需CSS
import swiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
Vue.prototype.axios = Axios // 把数据请求的axios方法绑定在vue的原型对象上
Vue.use(rem)
Vue.use(Vant)
Vue.use(swiper)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
