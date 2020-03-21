import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
import 'babel-polyfill'
import router from './router/index'
import VueLazyLoad from 'vue-lazyload'
//import './common/stylus/index'
Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false
fastclick.attach(document.body)
/* eslint-disable no-new */
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/default.png')
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
