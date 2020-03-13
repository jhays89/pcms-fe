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
        this.isLoading = false;
        alerts.success();

      }
      catch (error) {
        this.isLoading = false;
        alerts.error({ text: error.request.responseText });
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