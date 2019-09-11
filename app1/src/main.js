
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import 'lib-flexible/flexible'
import store from './store/store.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui' 
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(VueAxios,axios,VueResource);
Vue.use(ElementUI)
import './assets/font/iconfont.css'
import './assets/font1/iconfont.css'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)  
//import './assets/font/iconfont.css'
Vue.config.productionTip = false
axios.defaults.withCredentials = true;

// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   error: 'dist/error.png',
//   loading: 'dist/loading.gif',
//   attempt: 1
// })

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
