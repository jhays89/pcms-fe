<template>
  <v-app-bar class="header">
    <div class="logo-container"></div>
    <v-btn @click="signOut">Sign Out</v-btn>
    <div class="mobile-menu-icon-container" @click="createSideWidgetEvent">
      <div class="menu-bars-wrapper">
        <div class="menu-bar"></div>
        <div class="menu-bar"></div>
        <div class="menu-bar"></div>
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
    return {};
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
    }
  }
}
 
</script>

<style>
.v-toolbar__content {
  height: 60px !important;
  height: 100%;  
  justify-content: space-between;
}
</style>

<style scoped>
.header {
  position: sticky;
  top: 20px;
  margin-bottom: 20px;
}

.header.v-app-bar.v-toolbar.v-sheet {
  height: 60px !important;
  background-color: #fff;
}

.header .logo-container {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: url('../../assets/client-logo-1.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-left: 15px;
}

.header .mobile-menu-icon-container {
  display: flex;
  align-items: center;
  margin-right: 15px;
  width: 35px;
  height: 35px;
}

.header .mobile-menu-icon-container:hover {
  cursor: pointer;
}

.header .mobile-menu-icon-container .menu-bar {
  height: 2px;
  background-color: #fff;
  margin-bottom: 6px;

  transition: transform 250ms ease-out;
}

.header .mobile-menu-icon-container:hover .menu-bar {
  transform: scaleX(.8);
}

.header .mobile-menu-icon-container .menu-bars-wrapper {
  width: 100%;
}

@media screen and (min-width: 769px) {
  .header .mobile-menu-icon-container {
    display: none;
  }
}
</style>