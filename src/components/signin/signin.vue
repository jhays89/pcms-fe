<template>
  <div>
    <h2 class="text-left">Sign in</h2>
    <v-text-field v-model="email" label="Email" type="email" :rules="[rules.required]" />
    <v-text-field v-model="password" class="mb-6" label="Password" type="password" :rules="[rules.required]" />
    <v-btn @click="signin" :disabled="!isValid">Sign in</v-btn>
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
      password: ''
    }
  },

  methods: {
    signin() {
      if(this.isValid) {
        alerts.success();
      }
    }
  },

  computed: {
    isValid() {
      return !!this.email && !!this.password; 
    }
  }
}
</script>