import { store } from '@/store/store';
import { api } from '@/api'

function isSignedIn() {
  const user = store.getters.user;
  const account = store.getters.account;

  return !!user.id && !!account.id;
}

function cachedSignInAttempt() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await api.POST('api/AppUsers/CachedSignIn');
      store.dispatch('signIn', response.data);

      resolve();
    }
    catch (error) {
      reject(error);
    }
  });
};

function checkSignInStatus() {
  return new Promise((resolve, reject) => {
    if(!isSignedIn()) { 
      cachedSignInAttempt()
      .then(() => {
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
    }
    else {
      resolve();
    }
  });
};

function isActive() { // TODO: Ensure backend logic accounts for active status
  return store.getters.account ? store.getters.account.isActive : false;
}

export default {
  checkSignInStatus,
  cachedSignInAttempt,
  isActive,
  isSignedIn,
};