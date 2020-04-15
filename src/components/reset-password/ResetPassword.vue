<template>
  <div class="px-8 py-4 flex-grow-1 text-left">
    <h2>Reset Password</h2>
    <p>Please enter your new password</p>
    <v-row class="justify-space-between">
      <v-btn @click="setMode('login')" outlined class="accent--text">Back to login</v-btn>
      <v-btn class="accent" @click="resetPassword" :disabled="!isValid" :loading="isLoading">Reset Password</v-btn>
  </v-row>
  </div>
</template>

<script> //START: add text input with all the things. add validation. add api call logic
export default {
  props: {
    token: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      isLoading: false
    }
  },

  computed: {
    isValid() {
      return false;
    }
  },

  methods: {
    resetPassword() {

    },
    
    setMode(value) {
      this.$emit('setMode', value);
    }
  }
}
</script>