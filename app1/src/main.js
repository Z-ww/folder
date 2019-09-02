
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import 'lib-flexible/flexible'
import store from './store/store.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios,VueResource);

import './assets/font/iconfont.css'
Vue.config.productionTip = false
axios.defaults.withCredentials = true;

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
