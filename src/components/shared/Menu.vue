<template>
  <v-list :class="{ 'is-mobile': isMobile }" dense nav class="mt-6 py-0">
    <v-list-item two-line class="px-0">
      <v-list-item-content class="pa-0">
        <router-link to="/">
          <v-img width="184" height="40" :contain="true" src="https://dozacreative.com//wp-content/uploads/2020/01/logo-1.png"></v-img>
        </router-link>
      </v-list-item-content>
    </v-list-item>
    <v-list-item v-for="item in items" :key="item.title" link @click="shouldCloseMenu">
      <router-link :to="item.link">
        <v-list-item-icon>
          <v-icon class="black--text">{{ item.icon }}</v-icon>
        </v-list-item-icon>
          <v-list-item-content>
          <v-list-item-title class="text-left accent-dark--text">{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </router-link>
    </v-list-item>
  </v-list>
</template>

<script>
import { EventBus } from '../../event-bus.js';

export default {
    props: ['isCollapsed'],

    data() {
      return {
        drawer: true,
        items: [
          { title: 'Dashboard', icon: 'mdi-speedometer', link: '/' },
          { title: 'Tasks', icon: 'mdi-clipboard-check-outline', link: '/Test' },
          { title: 'Clients', icon: 'mdi-account-group-outline', link: '/Test' },
          { title: 'Campaigns', icon: 'mdi-desktop-mac-dashboard', link: '/Test' },
          { title: 'Templates', icon: 'mdi-newspaper', link: '/Test' },
          { title: 'Workflows', icon: 'mdi-graph-outline', link: '/Test' },
          { title: 'Login', icon: 'mdi-login-variant', link: '/Login' },
          { title: 'Test', icon: 'mdi-bomb', link: '/Test' },
        ],
      };
    },

    computed: {
      isMobile() {
        return this.$store.getters.isMobile;
      }
    },

    methods: {
      closeMobileMenu() {
        if(this.isMobile) {
          EventBus.$emit('close-widget');
        }
      },
      shouldCloseMenu() {
        if(this.isMobile) {
          this.closeMobileMenu();
        }
      }
    }
}
</script>

<style scoped>
.v-list-item a {
  display: flex;
  width: 100%;
}
</style>