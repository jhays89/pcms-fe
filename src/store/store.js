import { debounce } from 'lodash';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: {
      firstName: '',
      lastName: '',
      fullName: '',
      email: '',
      jwt: '', // Will also need to be store inside httpOnly cookie

    },
    account: {},
    isPublic: true,
    isMobile: false,
    tablet: 768
  },

  actions: {
    setup({ commit }) {
      commit('setMobileMedia');
      commit('setTabletListener');
    },

  },

  mutations: {
    setIsPublic(state, isPublic) {
      state.isPublic = isPublic;
    },
    setIsMobile(state, isMobile) {
      state.isMobile = isMobile;
    },
    setMobileMedia(state) {
      const windowWidth = window.innerWidth;
      state.isMobile = windowWidth <= state.tablet;
    },
    setTabletListener(state) {
      window.onresize = debounce(() => {
        const windowWidth = window.innerWidth;
        state.isMobile = windowWidth <= state.tablet;
      }, 500);
    }
  },

  getters: {
    isPublic(state) {
      return state.isPublic;
    },
    isMobile(state) {
      return state.isMobile;
    },
    tablet(state) {
      return state.tablet;
    }
  }
});

export { store }