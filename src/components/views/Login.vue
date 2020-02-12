<template>
<v-container class="login-page">
<v-row class="align-stretch">
  <v-col cols="12" sm="6">
    <v-card class="pa-4">
      <v-text-field placeholder="First name" type="text" />
      <v-text-field placeholder="Last name" type="text" />
      <v-text-field placeholder="Email" type="email" required />
      <v-text-field placeholder="Password" type="password" required />
      <v-btn @click="register">Register</v-btn>
    </v-card>
  </v-col>
    <v-col cols="12" sm="6">
      <v-card class="pa-4">
        <v-text-field placeholder="Email" type="email" required />
        <v-text-field placeholder="Password" type="password" required />
        <v-btn @click="register">Sign in</v-btn>
      </v-card>
  </v-col>
</v-row>
</v-container>
</template>

<script>

export default {
  name: 'Login',
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