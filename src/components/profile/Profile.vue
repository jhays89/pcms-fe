<template>
  <v-container>
    <h2>Profile</h2>
    <v-text-field @input="updateProfile('firstName', $event)" :value="profile.data.firstName" label="First name" type="text" />
    <v-text-field @input="updateProfile('lastName', $event)" :value="profile.data.lastName" label="Last name" type="text" />
    <v-text-field @input="updateProfile('email', $event)" :value="profile.data.email" label="Email" type="email" />
    <v-btn @click="save" :disabled="loading || profile.hasChanges" :loading="loading">Save Profile</v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      loading: false
    };
  },
  computed: {
    profile() {
      return this.$store.getters.profile;
    }
  },
  methods: {
    updateProfile(key, value) {
      this.$store.commit('updateProfile', { key, value });
    },
    async save() {
      try {
        this.loading = true;
        
        const response = await this.$http.PATCH(`api/AppUsers(${this.profile.data.id})`, this.getPayload());
        this.$store.dispatch('saveProfile');
      }
      catch (error) {
        const text = error && error.request ? error.request.responseText : 'An error occured while trying to sign you in. Please try again or contact support.'

        alerts.error({ text: text });
      }
      finally {
        this.loading = false;
      }
    },
    getPayload() {
      return [
        {
          name: 'firstName',
          value: this.profile.data.firstName
        },
        {
          name: 'lastName',
          value: this.profile.data.lastName
        },
        {
          name: 'email',
          value: this.profile.data.email
        }
      ];
    }    
  },
  mounted() {
    this.$store.commit('setProfile');
  }
}
</script>