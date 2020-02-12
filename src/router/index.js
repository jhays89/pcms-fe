import Vue from 'vue';
import Router from 'vue-router';
import Routes from '@/routes/index.js';
import { store } from '@/store/store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: Routes
});

router.beforeEach((to, from, next) => {
  store.state.isPublic = to.meta.isPublic; // Create an action and mutator
  next();
});

export { router }

// router.beforeEach((to, from, next) => {
//   return null;
// });

// router.afterEach((to, from, next) => {
//   return null;
// });
