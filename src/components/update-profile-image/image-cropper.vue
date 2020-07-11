<template>
  <div class="image-cropper">
    <image-cropper
      :style="`width: ${this.width}px`"
      class="mx-auto my-0"
      v-model="croppa"
      :width="width"
      :height="height"
      :accept="'image/*'"
      :zoom-speed="80"
      :placeholder="'Choose Avatar'"
      :placeholder-font-size="14"
      prevent-white-space
      @image-remove="remove"/>
    <v-row class="justify-space-between">
      <v-col class="flex-grow-0">
        <v-btn @click="remove">Remove</v-btn>
      </v-col>
      <v-col class="flex-grow-0">
        <v-btn class="accent">Save</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script> // TODO next: add different hover states based off if an image is loaded
import VueCroppa from 'vue-croppa';

export default {
  props: {
    width: {
      type: Number,
      default: 100
    },
    height: {
      type: Number,
      default: 100
    }
  },

 components: {
    'image-cropper': VueCroppa.component
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
      this.croppa.remove();
    },

    save() {
      const dataUrl = this.getDataUrl();

      // create payload
      // post payload
      // set url from response
    },

    generateDataUrl() {
      this.croppa.generateBlob(blob => {
        // process blog to get name & base64encodedUri
        // this.$emit('processed', result);
      });
    }
  }
}
</script>

<style>
.image-cropper .croppa-container canvas {
  box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.24);
}

.image-cropper .croppa-container svg {
  display: none !important;
}
</style>
