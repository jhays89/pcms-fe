<template>
  <v-row justify="start" align="center">
    <v-col class="flex-grow-0">
      <profile-image
        :url="url"
        :firstName="firstName"
        :lastName="lastName"
        :size="size"
      />
    </v-col>
    <v-col class="flex-grow-0">
      <v-btn class="accent mb-4">Change Avatar</v-btn> <!-- START HERE play with https://www.npmjs.com/package/vue-image-upload-resize-->
      <v-btn class="accent">Use Initials</v-btn>
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
      size: 100
    };
  }
}
</script>
