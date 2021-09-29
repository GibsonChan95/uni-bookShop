import App from './App'

// #ifndef VUE3
import Vue from 'vue'
//引入axios
import axios from './common/http.js'
Vue.prototype.$axios = axios

//引入vuex
import store from './store/index.js'
Vue.prototype.$store = store

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif