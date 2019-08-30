// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import 'lib-flexible/flexible'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios,VueResource);

import './assets/font/iconfont.css'
Vue.config.productionTip = false
axios.defaults.withCredentials = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
