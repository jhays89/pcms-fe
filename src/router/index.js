import Vue from 'vue';
import Router from 'vue-router';
import { store } from '@/store/store';
import Routes from '@/routes/index.js';
import routeHelpers from './helpers.js'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: Routes
});

router.beforeEach((to, from, next) => {
  if(to.path.toUpperCase() === '/login'.toUpperCase()) {
    store.commit('setIsPublic', to.meta.isPublic);
    next();
  }
  else {
    routeHelpers.checkSignInStatus()
    .then(() => {
      if (!routeHelpers.isActive() && routeHelpers.isSignedIn() && to.path.toUpperCase() === '/settings'.toUpperCase()) {
        store.commit('setIsPublic', to.meta.isPublic);
        next();
      }
      else {
        if(!routeHelpers.isSignedIn()) {
          store.commit('setIsPublic', to.meta.isPublic);
          next({ path: '/login' });
        }
        else if(!routeHelpers.isActive()) {
          store.commit('setIsPublic', to.meta.isPublic);
          next({ path: '/settings' });
        }
        else {
          store.commit('setIsPublic', to.meta.isPublic);
          next();
        }
      }
    })
    .catch((error) => {
      store.commit('setIsPublic', true);
      next({ path: '/login' });
    });
  }
});

export { router }

// router.afterEach((to, from, next) => {
//   return null;
// });
