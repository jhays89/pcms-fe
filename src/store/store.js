import { debounce, cloneDeep, isEqual } from 'lodash';
import Vue from 'vue';
import Vuex from 'vuex';
import format from '@/utils/format';

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
    profile: {
      data: {},
      hasChanges: false,
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
    },
    saveProfile({ state, commit }) {
      commit('setUser', state.profile.data);
      commit('setProfile'); 
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
      state.user.fullName = format.fullName(state.user.firstName, state.user.lastName);
    },
    setAccount(state, changes) {
      state.account = { ...changes };
    },
    setProfile(state) {
      state.profile.data = cloneDeep(state.user);
      state.profile.hasChanges = isEqual(state.profile.data, state.user);
    },
    updateProfile(state, changes) {
      Object.keys(state.profile.data).forEach(key => {
        if(key === changes.key) {
          state.profile.data[key] = changes.value;
        }
      });

      state.profile.hasChanges = isEqual(state.profile.data, state.user);
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
    },
    account(state) {
      return state.account;
    },
    user(state) {
      return state.user;
    },
    profile(state) {
      return state.profile;
    }
  }
});

export { store }