<template>
  <v-navigation-drawer 
    class="app-drawer"
    :value="drawer"
    width="200px"
    :mini-variant="isCollapsed"
    dark :expandOnHover="false"
    mobile-break-point="768"
    :hide-overlay="true"
    :stateless="true"
  >
    <app-menu :isMobileMenu="isMobile"></app-menu>
    <div class="collapse-bar" v-on:click="toggleCollapse" v-bind:class="{ 'hide-collapse-bar': isMobile }">
      <div class="icon-wrapper">
        <i class="fa fa-chevron-left icon"></i>
        <i class="fa fa-chevron-left icon"></i>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script>
import { debounce } from 'lodash';
const Menu = () => import('./Menu');

export default {
  name: 'navigation',
  components: {
    'app-menu': Menu
  },

  data() {
    return {
      drawer: true,
      isCollapsed: false,
      isMobile: false,
      mediaQuery: 768 // TODO: Vuex > Move this into state and use getter
    };
  },

  methods: {
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
    },

    setMobileStatus() {
      var windowWidth = window.innerWidth;
      this.isMobile = windowWidth <= this.mediaQuery ? this.isMobile = true : this.isMobile = false;
    }
  },

  created() {
    this.setMobileStatus();
    window.onresize = debounce(this.setMobileStatus, 500);
  }
}
</script>

<style scoped>
.app-drawer {
  position: relative;
  transition: all 250ms ease-in-out;
  overflow: initial;
}

.app-drawer .collapse-bar {
  position: absolute;
  display: flex;
  align-items: center;
  z-index: 1;
  right: 0;
  top: calc(50% - 100px);
  width: 25px;
  height: 200px;

  transition: right 300ms ease-in;
}

.app-drawer .collapse-bar:hover {
  cursor: e-resize;
}

.app-drawer .collapse-bar .icon {
  position: relative;
  left: -2px;
  font-size: 10px;
  color: #e0e0e0;

  transition: transform 250ms ease-in;
}

.app-drawer.collapsed .collapse-bar .icon {
  transform: rotate(180deg);
}

.app-drawer .collapse-bar .icon-wrapper {
  display: flex;
  position: relative;
  left: 7px;
  align-content: center;
  border-radius: 50%;
  padding: 10px;
  width: 30px;
  height: 30px;
  background-color: #27a0f8;
}

.app-drawer .v-list-item__title {
  color: #fff;
}

@media screen and (max-width: 768px) {
  .app-drawer {
    transform: translate(-120%) !important;
  }
}
</style>