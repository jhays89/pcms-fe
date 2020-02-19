import { debounce } from 'lodash';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isPublic: true,
    isMobile: false,
    tablet: 768
  },

  actions: {
    setup({ commit }) {
      commit('setTabletListener');
    }
  },

  mutations: {
    setIsPublic(state, isPublic) {
      state.isPublic = isPublic;
    },
    setIsMobile(state, isMobile) {
      state.isMobile = isMobile;
    },
    setTabletListener(state) {
      window.onresize = debounce(() => {
        var windowWidth = window.innerWidth;
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