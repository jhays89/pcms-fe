<template>
  <div class="hello">
    <md-button class="md-raised md-primary" @click="createAppNotificationEvent">App Notification</md-button>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
import alerts from '@/utils/alerts.js';

export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },

  methods: {
    createAppNotificationEvent() {
      alerts.success();
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
