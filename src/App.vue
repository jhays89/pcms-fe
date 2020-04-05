<template>
  <div id="app" :class="['wd-app', {'is-mobile': isMobile}]">
    <v-app>
      <div class="main-wrapper">
        <app-nav v-if="!isPublic"></app-nav>
        <v-content class="main-content">
          <app-header v-if="!isPublic"></app-header>
          <transition name="fade">
            <router-view />
          </transition>
        </v-content>
      </div>
      <side-widget v-if="!isPublic"></side-widget>
      <app-notification v-if="!isPublic"></app-notification>
    </v-app>
  </div>
</template>

<script>
import Header from './components/shared/Header';
import Navigation from './components/shared/Navigation';
import SideWidget from './components/side-widgets/SideWidget';
import AppNotification from './components/app-notifications/AppNotification';

export default {
  name: 'App',
  components: {
    'app-nav': Navigation,
    'app-header': Header,
    'side-widget': SideWidget,
    'app-notification': AppNotification
  },
  computed: {
    isPublic() {
      return this.$store.getters.isPublic;
    },
    isMobile() {
      return this.$store.getters.isMobile;
    }
  },
  created() {
    this.$store.dispatch('setup');
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900');
@import url('https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

#app {
  position: relative;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f8f8f8;
}

body {
  font-size: 14px;
  font-family: Roboto, 'Avenir', Helvetica, Arial, sans-serif;
  color: #202124;
}

h1, h2, h3, h4 {
  font-family: Roboto Condensed, sans-serif, 'Avenir', Helvetica, Arial;
}

h1 {
  font-size: 30px;
}

h2 {
  font-size: 24px;
}

h3 {
  font-size: 20px;
}

h4 {
  font-size: 16px;
}

a, a:visited {
  text-decoration: none;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .75s;
}

.main-wrapper a:hover {
  text-decoration: none;
}

.fade-enter, .fade-leave-to {
  position: fixed;
  right: -1000%;
  opacity: 0;
}

.main-wrapper {
  display: flex;
  height: calc(100vh - 60px);
  width: 100%;
  height: 100%;
}

.main-content {
  position: relative;
  padding-top: 0 !important;
  flex: 1 1 auto;
  padding: 20px !important;
  width: 100%;
}

/* MOBILE */
.is-mobile .v-content {
  flex: inherit;
  width: 100%;
}

/* VUETIFY */
.wd-app .v-application {
  background-color: #f8f8f8;
}

/* card */
.wd-app .v-content .v-card {
  border-radius: 7px;
  box-shadow: 0px 5px 3px 0px rgba(0,0,0,0.24);
}
.row.align-stretch .v-card {
  height: 100%;
}

/* primary */
.wd-app .v-application .primary {
  background-color: #fff !important;
  border-color: #fff !important;
}

.wd-app .v-application .primary--text {
  color: #000 !important;
}

/* accent */
.wd-app .accent {
  background-color: #7367F0 !important;
  border-color: #7367F0 !important;
}

/* anchor */
.wd-app .v-application .anchor {
  color: #000 !important;
}

/* v-btn */
.wd-app .v-application .v-btn {
  background-color: #7367F0 !important;
  color: #fff !important;
}

/* v-list */
.wd-app .v-application .v-list-item__title {
  color: #000 !important;
}

.wd-app .v-application .router-link-exact-active .v-list-item__title,
.wd-app .v-application .router-link-exact-active .v-list-item__icon .v-icon {
  color: #7367F0 !important;
}
</style>
