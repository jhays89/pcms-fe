<template>
  <div class="px-8 py-4 flex-grow-1 text-left">
    <h2 class="">Sign In</h2>
    <v-text-field v-model="email" label="Email" type="email" :rules="[rules.required]" />
    <v-text-field v-model="password" label="Password" type="password" :rules="[rules.required]" />
    <v-row class="mb-4">
      <v-col class="text-right pa-0">
        <v-btn @click="setMode('forgot-password')" text class="accent--text">Forgot Password</v-btn>
      </v-col>
    </v-row>
    <v-row class="justify-space-between">
      <v-btn @click="setMode('register')" outlined class="accent--text">Register</v-btn>
      <v-btn class="accent" @click="signin" :disabled="!isValid" :loading="isLoading">Sign in</v-btn>
    </v-row>
  </div>
</template>

<script>
import alerts from '@/utils/alerts';

export default {
  name: 'Signin',
  data () {
    return {
      rules: {
        required: value => !!value || 'Required',
      },
      email: '',
      password: '',
      isLoading: false
    }
  },

  methods: {
    async signin() {
      if(!this.isValid) { alerts.error('Please make sure all fields are completed'); }

      try {
        this.isLoading = true;
  
        const response = await this.$http.POST('api/AppUsers/SignIn', this.getPayload());
        this.$store.dispatch('signIn', response.data);
        this.isLoading = false;

        this.$router.push('/Settings');
      }
      catch (error) {
        this.isLoading = false;
        const text = error && error.request ? error.request.responseText : 'An error occured while trying to sign you in. Please try again or contact support.'

        alerts.error({ text: text });
      }
    },

    getPayload() {
      return {
        email: this.email,
        password: this.password
      };
    },
    setMode(value) {
      this.$emit('setMode', value);
    }
  },

  computed: {
    isValid() {
      return !!this.email && !!this.password; 
    }
  }
}
</script>