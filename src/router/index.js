import Vue from 'vue';
import Router from 'vue-router';
import { store } from '@/store/store';
import Routes from '@/routes/index.js';
// TODO move helper functions into a routes util file

Vue.use(Router);

const isSignedIn = function () {
  const user = store.getters.user;
  const account = store.getters.account;

  return !!user.id && !!account.id;
}

const cachedSignIn = async function () {
  try {
    const response = await store.$http.POST('api/AppUsers/CachedSignIn');
    store.dispatch('signIn', response.data);
  }
  catch (error) {
    alerts.error({ text: 'An error occured ' });
  }
};

const checkLoginStatus = function() {
  if(!isSignedIn()) { 
    cachedSignIn();
  }
};

const router = new Router({
  mode: 'history',
  routes: Routes
});

router.beforeEach((to, from, next) => {
  checkLoginStatus();
  // TODO check active status
  if(!isLoggedIn()) { next({ name: 'Login'}); }

  store.commit('setIsPublic', to.meta.isPublic);
  next();
});

export { router }

// router.afterEach((to, from, next) => {
//   return null;
// });
