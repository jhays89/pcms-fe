<template>
    <div class="navigation" v-bind:class="{ 'hide-navigation': isMobile, 'collapsed': isCollapsed }">
        <app-menu :isCollapsed="isCollapsed" :isMobileMenu="isMobile" ></app-menu>
        <div class="collapse-bar" v-on:click="toggleCollapse" v-bind:class="{ 'hide-collapse-bar': isMobile }">
            <div class="icon-wrapper">
                <i class="fa fa-chevron-left icon"></i>
                <i class="fa fa-chevron-left icon"></i>
            </div>
        </div>
    </div>
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
                isCollapsed: false,
                isMobile: false
            };
        },

        methods: {
            toggleCollapse() {
                this.isCollapsed = !this.isCollapsed;
            },

            setMobileStatus() {
                var windowWidth = window.innerWidth;

                if(windowWidth <= 768) {
                    this.isCollapsed = true;
                    this.isMobile = true;
                }
                else {
                    this.isMobile = false;
                }
            }
        },

        created() {
            this.setMobileStatus();
            window.onresize = debounce(this.setMobileStatus, 500);
        }
    }
</script>

<style scoped>
.navigation {
    position: relative;
    transition: all 250ms ease-in-out;
}

.navigation .collapse-bar {
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

.navigation .collapse-bar:hover {
    cursor: e-resize;
}

.navigation .collapse-bar .icon {
    position: relative;
    left: -2px;
    font-size: 10px;
    color: #e0e0e0;

    transition: transform 250ms ease-in;
}

.navigation.collapsed .collapse-bar .icon {
    transform: rotate(180deg);
}

.navigation .collapse-bar .icon-wrapper {
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

.navigation.hide-navigation {
    display: none;
}
</style>