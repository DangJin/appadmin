// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import Vuex from 'vuex'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import 'iview/dist/styles/iview.css'  // 使用 CSS

Vue.config.productionTip = false
Vue.use(iView)
Vue.use(Vuex)
Vue.use(axios)
Vue.use(qs)

// 路由前置操作
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})
// 路由后置操作
router.afterEach((to, from, next) => {
  iView.LoadingBar.finish()
})

// 添加mockjs拦截请求，模拟返回服务器数据

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
