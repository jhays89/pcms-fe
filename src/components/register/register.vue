<template>
  <div>
    <h2 class="text-left">Registration</h2>
    <v-text-field v-model="firstName" label="First name" type="text" />
    <v-text-field v-model="lastName" label="Last name" type="text" />
    <v-text-field v-model="email" label="Email" type="email" :rules="[rules.required, rules.email]" />
    <v-text-field v-model="password" class="mb-6" label="Password" type="password" :rules="[rules.password, rules.required]" />
    <v-btn @click="register" :disabled="!isValid">Register</v-btn>
  </div>
</template>

<script>
import alerts from '@/utils/alerts';

export default {
  name: 'Register',
  data () {
    return {
      rules: {
        required: value => !!value || 'Required',
        // eslint-disable-next-line
        email: value => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'E-mail must be valid',
        // eslint-disable-next-line
        password: value => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{6,30}$/g.test(value) ||
          'Must have at least one of each of the folowing: lowercase letter, uppercase letter, number and symbol. Must be between 6-30 characters'
      },
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  },

  methods: {
    register() {
      if(this.isValid) {
        alerts.success();
      }
    }
  },

  computed: {
    isValid() {
      // eslint-disable-next-line
      const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email);
      // eslint-disable-next-line
      const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{6,30}$/g.test(this.password);

      return isEmailValid && isPasswordValid; 
    }
  }
}
</script>