<template>
  <v-container>
    <h1>Settings</h1>
    <v-row class="align-stretch">
      <v-col cols="12" sm="12">
        <v-card>
          <Profile />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Profile from '../profile/Profile.vue';

export default {
  name: 'Settings',
  components: {
    Profile
  }
}
</script>