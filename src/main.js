// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import vuetify from '@/plugins/vuetify';
import App from './App';
import { store } from './store/store.js';
import { router } from './router';
import { api } from './api'
    
require('lodash/core');

Vue.prototype.$api = api;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuetify,
  store,
  router,
  api,
  components: { App },
  template: '<App/>'
})
