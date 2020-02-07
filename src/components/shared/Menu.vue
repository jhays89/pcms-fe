<template>
<v-navigation-drawer v-model="drawer" :mini-variant="isCollapsed" dark :expandOnHover="false" absolute>
    <v-list dense nav class="py-0" >
        <v-list-item two-line :class="isCollapsed && 'px-0'">
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
            <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <router-link :to="item.link">
                    <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
                </router-link>
            </v-list-item-content>
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

<style scoped>

.main-item-list .nav-item {
    position: relative;
    z-index: 1;
    overflow: hidden;
    padding: 10px 15px 10px 8px;
    color: #fff;

    transition: background-color 250ms ease-in;
}

.main-item-list .nav-item:hover {
    text-decoration: none;
    color: #fff;
    background-color: #358ecf;
}

.main-item-list .nav-item .icon {
    position: relative;
    left: 5px;
    top: 0;
    transition: left 175ms ease-in;
}

.main-item-list .nav-item:hover .icon {
    left: 8px;
}
</style>