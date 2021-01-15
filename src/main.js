import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import Api from '@/untils/api.js'
Vue.config.productionTip = false
import Img from "@/untils/img.js"
Vue.prototype.$http=Api
Vue.prototype.$img = Img
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
