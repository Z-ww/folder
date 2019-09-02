// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import 'lib-flexible/flexible'
<<<<<<< HEAD
import store from './store/store.js'
Vue.use(VueResource)
=======
>>>>>>> 34887b22132bbaf449faaa9ebb2d0677d133c893
import './assets/font/iconfont.css'
Vue.config.productionTip = false
Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
