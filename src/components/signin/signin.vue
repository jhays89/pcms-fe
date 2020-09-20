<template>
  <div class="px-8 py-4 flex-grow-1 text-left">
    <h2>Login</h2>
    <p class="mb-6">Welcome back, please login to your account</p>
    <app-text-field v-model="email" label="Email" type="email" :rules="[rules.required]" />
    <app-text-field v-model="password" label="Password" type="password" :rules="[rules.required]" />
    <v-row no-gutters class="mb-4">
      <v-col class="text-right pa-0">
        <v-btn @click="setMode('forgot-password')" text class="accent--text">Forgot Password</v-btn>
      </v-col>
    </v-row>
    <v-row no-gutters class="justify-space-between">
      <v-btn @click="setMode('register')" outlined dense class="accent--text">Register</v-btn>
      <v-btn class="accent" @click="signin" :disabled="!isValid" :loading="isLoading">Login</v-btn>
    </v-row>
  </div>
</template>

<script>
import alerts from '@/utils/alerts';
const AppTextField = () => import('@/components/shared/app-text-field');

export default {
  name: 'Signin',
  components: {
    'app-text-field': AppTextField
  },
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
