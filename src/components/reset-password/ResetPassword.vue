<template>
  <div class="px-8 py-4 flex-grow-1 text-left">
    <h2>Reset Password</h2>
    <p>Please enter your new password</p>
    <app-text-field v-model="password" outlined dense label="Password" type="password" :rules="[rules.password, rules.required]" class="mb-4"/>
    <app-text-field v-model="confirmedPassword" outlined dense label="Confirm Password" type="password" :rules="[rules.password, rules.required]" class="mb-4"/>
    <v-row no-gutters class="justify-space-between">
      <v-btn @click="setMode('login')" outlined class="accent--text">Back to login</v-btn>
      <v-btn class="accent" @click="resetPassword" :disabled="!isValid" :loading="isLoading">Reset Password</v-btn>
  </v-row>
  </div>
</template>

<script>
import alerts from '@/utils/alerts';
const AppTextField = () => import('@/components/shared/app-text-field');

export default {
  props: {
    token: {
      type: String,
      default: ''
    },
    email: {
      type: String,
      default: ''
    }
  },

  components: {
    'app-text-field': AppTextField
  },

  data() {
    return {
      isLoading: false,
      password: '',
      confirmedPassword: '',
      rules: {
        required: value => !!value || 'Required',
        password: value => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{6,60}$/g.test(value) ||
          'Must have at least one of each of the folowing: lowercase letter, uppercase letter, number and symbol. Must be between 6-30 characters',
      }
    }
  },

  computed: {
    isValid() {
      // eslint-disable-next-line
      const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{6,60}$/g.test(this.password);
      // eslint-disable-next-line
      const isConfirmedPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{6,60}$/g.test(this.confirmedPassword);

      return isPasswordValid && isConfirmedPasswordValid;
    }
  },

  methods: {
    async resetPassword() {
      this.isLoading = true;

      try {
        await this.$http.POST('api/AppUsers/ResetPassword', this.getPayload());
        this.setMode('login');

        alerts.success({
          text: `Password reset successfully!`
        });
      }
      catch(error) {
        const text = error && error.request ? error.request.responseText : 'An error occured while setting your new password'
        alerts.error({ text: text });
      }
      finally {
        this.isLoading = false;
      }
    },

    getPayload() {
      return {
        password: this.password,
        email: this.email,
        token: this.token
      }
    },

    setMode(value) {
      this.$emit('setMode', value);
    }
  }
}
</script>
