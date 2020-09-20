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
      <v-btn @click="openProfileImageWidget" class="accent mb-4">Change Avatar</v-btn>
      <v-btn>Reset Image</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { EventBus } from '../../event-bus';
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
      size: 100,
      imgSrc: ''
    };
  },

  methods: {
    openProfileImageWidget() {
      const widget = {
        name: 'profile-image-widget',
      };

      EventBus.$emit('open-side-widget', widget);
    }
  }
}
</script>
