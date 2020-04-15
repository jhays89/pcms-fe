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
          <ForgotPassword 
            v-if="isForgotPasswordMode"
            v-on:setMode="setMode"
          />
          <ResetPassword
            :token="token"
            v-if="isResetPasswordMode"
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
import ForgotPassword from '../forgot-password/ForgotPassword.vue';
import ResetPassword from '../reset-password/ResetPassword.vue';

export default {
  name: 'Login',

  components: {
    Register,
    Signin,
    ForgotPassword,
    ResetPassword
  },

  data () {
    return {
      mode: 'login',
      token: ''
    }
  },

  computed: {
    isLogInMode() {
      return this.mode === 'login';
    },
    isRegisterMode () {
      return this.mode === 'register';
    },
    isForgotPasswordMode() {
      return this.mode === 'forgot-password';
    },
    isResetPasswordMode() {
      return this.mode === 'reset-password';
    }
  },

  methods: {
    initialize() {
      if(this.$route.query.mode) {
        this.setMode(this.$route.query.mode);
      }

      if(this.$route.query.token) {
        this.token = this.$route.query.token;
      }
    },

    setMode(value) {
      this.mode = value;
    }
  },

  created() {
    this.initialize();
  }
}
</script>