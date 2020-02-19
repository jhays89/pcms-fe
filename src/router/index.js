import Vue from 'vue';
import Router from 'vue-router';
import { store } from '@/store/store';
import Routes from '@/routes/index.js';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: Routes
});

router.beforeEach((to, from, next) => {
  store.commit('setIsPublic', to.meta.isPublic);
  next();
});

export { router }

// router.afterEach((to, from, next) => {
//   return null;
// });
