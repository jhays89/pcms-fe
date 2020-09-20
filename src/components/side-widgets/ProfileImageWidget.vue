<template>
  <div class="profile-image-widget">
      <div class="header">
        <span class="close-btn" @click="closeWidget">×</span>
      </div>
      <div class="content pa-4">
        <image-cropper
          :width="100"
          :height="100"
          @processed="save"
        />
      </div>
  </div>
</template>

<script>
import { EventBus } from '../../event-bus';
const ImageCropper = () => import('@/components/update-profile-image/image-cropper');

export default {
  name: 'profile-image-widget',

  components: {
    'image-cropper': ImageCropper
  },

  data() {
    return {
      croppa: {},
      src: null
    };
  },

  methods: {
    closeWidget() {
      EventBus.$emit('close-widget');
    },

    remove() {

    },

    cancel() {

    },

    save(base64Encoded) {
      console.log('succes' + base64Encoded);
    },
  }
}
</script>

<style>
.profile-image-widget {

}
</style>
