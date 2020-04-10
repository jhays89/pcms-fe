<template>
  <v-app-bar class="app-header white">
    <div>
      <v-select :items="items" placeholder="Select client" :hide-details="true">
        <template slot="selection" slot-scope="data">
          <v-img width="120" height="50" @click="goToClientDashboard" contain :src="data.item.logoUrl" />
        </template>
        <template slot="item" slot-scope="data">
          <v-img class="app-header-client-item" width="120" height="50" @click="goToClientDashboard" contain :src="data.item.logoUrl"/>
        </template>
      </v-select>
    </div>
    <div class="d-flex align-center">
      <v-badge content="99+" color="error" overlap left>
        <router-link to="/">
          <v-icon size="25" class="accent--text">mdi-bell</v-icon>
        </router-link>
      </v-badge>
      <v-divider v-if="!isMobile" class="ml-2 mr-2" vertical />
      <v-row no-gutters class="d-flex align-center">
        <div v-if="!isMobile">
          <v-avatar>
            <v-img height="50" width="50" contain src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
        </div>
        <div v-if="!isMobile" class="ml-2 mr-2">
          <div class="text-truncate text-left accent--text font-weight-bold">Solid Snake</div>
          <div class="text-left">Owner</div>
        </div>
        <v-menu v-if="!isMobile" left origin="top center" transition="scale-transition">
          <template v-slot:activator="{ on }">
            <v-icon class="accent--text" v-on="on">mdi-menu-down</v-icon>
          </template>
          <v-list>
            <v-list-item v-for="(item, i) in menuItems" :key="i">
              <router-link :to="item.link">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </router-link>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-row>
      <div class="mobile-menu-icon-container menu-bars-wrapper" @click="createSideWidgetEvent">
        <v-icon>mdi-menu</v-icon>        
      </div>
    </div>
  </v-app-bar>
</template>

<script>
import { EventBus } from '../../event-bus.js';
import alerts from '@/utils/alerts';

export default {
  name: 'app-header',

  data() {
    return {
      menuItems: [
        { title: 'Profile Setting', link: '/settings' },
        { title: 'Agency Setting', link: '/' }
      ],
      currentClient: {
        text: 'Client 1', value: 1, logoUrl: 'https://www.gamestop.com//on/demandware.static/Sites-gamestop-us-Site/-/default/dw5d4e98e3/images/svg-icons/logo-1280.svg'
      },
      items: [
        { text: 'Client 1', value: 1, logoUrl: 'https://www.gamestop.com//on/demandware.static/Sites-gamestop-us-Site/-/default/dw5d4e98e3/images/svg-icons/logo-1280.svg' },
        { text: 'Client 2', value: 2, logoUrl: 'https://qph.fs.quoracdn.net/main-qimg-517c2fff8d8c4d489dffa3ceb569557d.webp' },
        { text: 'Client 3', value: 3, logoUrl: 'https://cdn.corporate.walmart.com/dims4/WMT/c2bbbe9/2147483647/strip/true/crop/2389x930+0+0/resize/1446x563!/quality/90/?url=https%3A%2F%2Fcdn.corporate.walmart.com%2Fd6%2Fe7%2F48e91bac4a8ca8f22985b3682370%2Fwalmart-logos-lockupwtag-horiz-blu-rgb.png' }
      ]
    };
  },

  computed: {
    isMobile() {
      return this.$store.getters.isMobile;
    }
  },

  methods: {
    createSideWidgetEvent() {
      var widget = {
        name: 'menu-side-widget',
        options: {}
      };
      
      EventBus.$emit('open-side-widget', widget);
    },
    async signOut() {
      try {
        await this.$http.POST('api/AppUsers/SignOut');
        this.$router.push('/Login');
      }
      catch (error) {
        alerts.error({ text: 'An error occured while signing you out. Please try again' });
      }
    },
    goToClientDashboard() {
      this.$router.push(`/`);
    }
  }
}
 
</script>

<style>
.app-header .v-toolbar__content {
  height: 60px !important;
  height: 100%;  
  justify-content: space-between;
}

.app-header .v-input--is-label-active .v-select__selections input {
  display: none;
}

.app-header .v-input,
.app-header .v-select__selections {
  width: 120px;
  height: 50px;
}

.app-header .v-input {
  align-items: center;
}

.app-header .v-input__slot:before,
.app-header .v-input__slot::after {
  display: none;
}

.app-header .v-input__append-inner {
  position: relative;
  top: 10px;
}

</style>

<style scoped>
.app-header {
  position: sticky;
  top: 20px;
  margin-bottom: 20px;
  border-radius: 7px;
}

.app-header.v-app-bar.v-toolbar.v-sheet {
  height: 60px !important;
  box-shadow: 0px 5px 3px 0px rgba(0,0,0,0.24);
}

.app-header .mobile-menu-icon-container:hover {
  cursor: pointer;
}

.app-header-client-item {
  margin-top: 5px;
  margin-bottom: 5px;
}

.menu-bars-wrapper {
  margin-left: 50px;
}

@media screen and (min-width: 769px) {
  .app-header .mobile-menu-icon-container {
    display: none;
  }
}
</style>