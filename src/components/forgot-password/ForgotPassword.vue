<template>
  <div class="px-8 py-4 flex-grow-1 text-left">
    <h2>Recover your password</h2>
    <p>Please enter your email address and we'll send you an email with instructions on how to reset your password.</p>
    <v-text-field v-model="email" outlined dense label="Email" type="email" />
    <v-row no-gutters class="justify-space-between">
      <v-btn @click="setMode('login')" outlined dense class="accent--text">Back to login</v-btn>
      <v-btn class="accent" @click="recoverPassword" :disabled="!isValid" :loading="isLoading">Recover Password</v-btn>
    </v-row>
  </div>
</template>

<script>
import alerts from '@/utils/alerts';

export default {
  data() {
    return {
      email: '',
      isLoading: false
    }
  },

  methods: {
    async recoverPassword() {
      this.isLoading = true;

      try {
        const accountExists = await this.doesAccountExists();
        if(accountExists) {
          await this.sendRecoveryEmail();

          alerts.success({
            text: `An email was sent to ${this.email}. Please check your email for further instructions.`,
            timer: 0
          });
        }
      }
      catch(error) {
        const text = error && error.request ? error.request.responseText : 'An error occured while trying to find your account'
        alerts.error({ text: text });
      }
      finally {
        this.isLoading = false;
      }
    },

    getPayload() {
      return {
        email: this.email,
      };
    },

    async doesAccountExists() {
      const response = await this.$http.POST('api/AppUsers/GetByEmail', this.getPayload());
      if(response.data) {
        return true;
      }

      return false;
    },

    async sendRecoveryEmail() {
      await this.$http.POST('api/AppUsers/ForgotPassword', this.getPayload());
    },

    setMode(value) {
      this.$emit('setMode', value);
    }
  },

  computed: {
    isValid() {
      // eslint-disable-next-line
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email); 
    }
  }
}
</script>