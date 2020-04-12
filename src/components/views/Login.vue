<template>
<v-container>
  <v-card max-width="1000" height="480" class="d-flex mx-auto">
    <v-row no-gutters class="align-stretch">
      <v-col class="pt-0 pb-0 accent-background d-flex align-center">
        <v-img src="/static/signin-graphic.png" />
      </v-col>
      <v-col class="pt-0 pb-0 d-flex align-center">
        <transition name="fade">
          <Register 
            v-if="isRegisterMode"
            v-on:setMode="setMode"
          />
          <Signin
            v-if="isLogInMode"
            v-on:setMode="setMode"
          />
        </transition>
      </v-col>
    </v-row>
  </v-card>
</v-container>
</template>

<script>
import Register from '../register/Register.vue';
import Signin from '../signin/Signin.vue';

export default {
  name: 'Login',

  components: {
    Register,
    Signin
  },

  data () {
    return {
      mode: 'login',
      isSignInValid: false,
      isRegisterValid: false
    }
  },

  computed: {
    isLogInMode() {
      return this.mode === 'login';
    },
    isRegisterMode () {
      return this.mode === 'register';
    }
  },

  methods: {
    setMode(value) {
      this.mode = value;
    }
  }
}
</script>