<template>
  <v-navigation-drawer
    class="app-drawer primary"
    :value="drawer"
    :mini-variant="isCollapsed"
    width="200px"
    :expandOnHover="false"
    :mobile-break-point="tablet"
    :hide-overlay="true"
    :stateless="true"
  >
    <app-menu />
    <div class="collapse-bar" v-on:click="toggleCollapse" v-bind:class="{ 'hide-collapse-bar': isMobile }">
      <div class="icon-wrapper accent">
        <i class="fa fa-chevron-left icon"></i>
        <i class="fa fa-chevron-left icon"></i>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script>
const Menu = () => import('./Menu');

export default {
  name: 'navigation',
  components: {
    'app-menu': Menu
  },

  data() {
    return {
      drawer: true,
      isCollapsed: false
    };
  },

  computed: {
    tablet() {
      return this.$store.getters.tablet;
    },
    isMobile() {
      return this.$store.getters.isMobile;
    }
  },

  methods: {
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
    }
  }
}
</script>

<style>
.app-drawer .v-navigation-drawer__content {
  overflow-x: initial;
  overflow-y: initial;
}

</style>

<style scoped>
.app-drawer {
  position: relative;
  z-index: 10;
  transition: all 250ms ease-in-out;
  overflow: initial;
  box-shadow: 5px 0px 3px 0px rgba(0,0,0,0.24);
}

.app-drawer .v-list {
  position: sticky;
  top: 24px;
}

.is-mobile .app-drawer {
  display: none;
}

.app-drawer .collapse-bar {
  position: sticky;
  display: flex;
  align-items: center;
  z-index: 1;
  top: 300px;
  width: 25px;
  height: 200px;
  margin-left: auto;
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

.app-drawer.v-navigation-drawer--mini-variant .collapse-bar .icon {
  transform: rotateY(180deg);
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