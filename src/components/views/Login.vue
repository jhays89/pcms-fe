<template>
<v-container class="login-page">
<v-row class="align-stretch">
  <v-col cols="12" sm="6">
    <v-card class="pa-4">
     <register />
    </v-card>
  </v-col>
    <v-col cols="12" sm="6">
      <v-card class="pa-4">
        <signin />
      </v-card>
  </v-col>
</v-row>
</v-container>
</template>

<script>
import Register from '../register/register.vue';
import Signin from '../signin/Signin.vue';

export default {
  name: 'Login',
  components: {
    Register,
    Signin
  },

  data () {
    return {

    }
  },

  methods: {

  }
}
</script>