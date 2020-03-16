import { debounce } from 'lodash';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: {
      id: '',
      createdAt: '',
      updatedAt: '',
      firstName: '',
      lastName: '',
      fullName: '',
      email: '',
      ProfileImageUrl: '',
      appUserRoleId: '',
      userTypes: [],
    },
    account: {
      id: null,
      createdAt: '',
      updatedAt: '',
      name: '',
      logoImageUrl: '',
      isActive: false,
      cardType: '',
      stripeCardLastFour: null
    },
    isPublic: true,
    isMobile: false,
    tablet: 768
  },

  actions: {
    setup({ commit }) {
      commit('setMobileMedia');
      commit('setTabletListener');
    },
    signIn({ commit }, request) {
      commit('setUser', request.appUserDTO);
      commit('setAccount', request.accountDTO);
    }
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
    },
    setUser(state, changes) {
      state.user = { ...changes };
    },
    setAccount(state, changes) {
      state.account = { ...changes };
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