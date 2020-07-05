<template>
  <v-row justify="start" align="center">
    <v-col class="flex-grow-0">
      <profile-image
        :url="url"
        :firstName="firstName"
        :lastName="lastName"
        :backgroundColor="backgroundColor"
        :size="size"
      />
    </v-col>
    <v-col class="flex-grow-0">
      <v-btn class="accent">Change Avatar</v-btn> <!-- START HERE -->
    </v-col>
  </v-row>
</template>

<script>
const ProfileImage = () => import('@/components/profile-image/profile-image');

export default {
  name: 'UpdateProfileImage',
  components: {
    'profile-image': ProfileImage
  },
  data() {
    return {
      url: '',
      firstName: '',
      lastName: '',
      backgroundColor: '',
      size: 100
    };
  }
}
</script>
