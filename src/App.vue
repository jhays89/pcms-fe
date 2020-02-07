<template>
  <div id="app">
    <v-app>
      <app-header></app-header>
      <div class="main-wrapper">
        <app-nav></app-nav>
        <div class="main-content">
          <transition name="fade">
              <router-view/>
          </transition>
        </div>
      </div>
      <side-widget></side-widget>
      <app-notification></app-notification>
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
}

.main-content {
  position: relative;
  flex: 1;
  margin-top: 20px;
}
</style>
