<template>
  <v-list :class="{ 'is-mobile': isMobileMenu }" dense nav class="py-0">
    <v-list-item two-line class="px-0">
      <v-list-item-avatar>
        <img src="@/assets/solid-justin.png">
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>Application</v-list-item-title>
        <v-list-item-subtitle>Subtext</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list-item v-for="item in items" :key="item.title" link>
      <router-link :to="item.link">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
          <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </router-link>
    </v-list-item>
  </v-list>
</template>

<script>
import { EventBus } from '../../event-bus.js';

export default {
    props: ['isMobileMenu', 'isCollapsed'],

    data() {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'mdi-image', link: '/' },
          { title: 'Login', icon: 'mdi-view-dashboard', link: '/Login' },
          { title: 'Test', icon: 'mdi-help-box', link: '/Test' },
        ],
      };
    },

    computed: {
      isMobile() {
        // TODO: Vuex > use a getter. Should eleminate need for prop
        return false;
      }
    },

    methods: {
      closeMobileMenu() {
        if(this.isMobileMenu) {
          EventBus.$emit('close-widget');
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

.v-list-item__title {
  color: #fff;
}

.is-mobile .v-list-item__title {
  color: #2c3e50;
}
</style>