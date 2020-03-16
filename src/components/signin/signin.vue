<template>
  <div>
    <h2 class="text-left">Sign in</h2>
    <v-text-field v-model="email" label="Email" type="email" :rules="[rules.required]" />
    <v-text-field v-model="password" class="mb-6" label="Password" type="password" :rules="[rules.required]" />
    <v-btn @click="signin" :disabled="!isValid" :loading="isLoading">Sign in</v-btn>
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
        alerts.success();

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
    }
  },

  computed: {
    isValid() {
      return !!this.email && !!this.password; 
    }
  }
}
</script>