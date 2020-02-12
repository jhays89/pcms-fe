<template>
  <div>
    <v-text-field placeholder="First name" type="text" />
    <v-text-field placeholder="Last name" type="text" />
    <v-text-field placeholder="Email" type="email" required />
    <v-text-field placeholder="Password" type="password" required />
    <v-btn @click="register">Register</v-btn>
  </div>
</template>

<script>

export default {
  name: 'Register',
  data () {
    return {

    }
  },

  methods: {
    register() {
        return true;
    }
  }
}
</script>