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
    <v-list dense nav class="py-0" >
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
                    <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </router-link>
        </v-list-item>
    </v-list>
</v-navigation-drawer>
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
                { title: 'Test', icon: 'mdi-view-dashboard', link: '/Test' },
                { title: 'About', icon: 'mdi-help-box', link: '/' },
            ],
        };
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

<style>
.side-widget .v-navigation-drawer  {
    width: 100% !important;
}
</style>

<style scoped>
.app-drawer.v-navigation-drawer a {
    display: flex;
    width: 100%;
} 
</style>