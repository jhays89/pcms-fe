<template>
<v-container class="signin-page">
<v-row class="align-stretch">
    <v-col cols="12" sm="6">
      <v-card class="pa-4">
        <v-text-field placeholder="Email" type="email" required />
        <v-text-field placeholder="Password" type="password" required />
        <v-btn @click="signin">Sign in</v-btn>
      </v-card>
  </v-col>
</v-row>
</v-container>
</template>

<script>

export default {
  name: 'Signin',
  data () {
    return {

    }
  },

  methods: {
    signin() {
      return true;
    }
  }
}
</script>