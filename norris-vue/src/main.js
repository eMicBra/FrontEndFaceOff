// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ToggleButton from 'vue-js-toggle-button'
import BootstrapVue from 'bootstrap-vue'
import store from './vuex/store'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/site.css'

Vue.use(ToggleButton)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store, // inject store to all children
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
