<template>
  <v-container>
    <h2>Profile</h2>
    <v-text-field @input="updateProfile('firstName', $event)" :value="profile.data.firstName" label="First name" type="text" />
    <v-text-field @input="updateProfile('lastName', $event)" :value="profile.data.lastName" label="Last name" type="text" />
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
    save() {
      try {
        this.loading = true;
        // TODO call Api with payload
        this.$store.dispatch('saveProfile');
      }
      catch (ex) {

      }
      finally {
        this.loading = false;
      }
    }
  },
  mounted() {
    this.$store.commit('setProfile');
  }
}
</script>