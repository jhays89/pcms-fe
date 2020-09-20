<template>
  <div class="image-cropper">
    <div class="image-cropper-container">
      <image-cropper
        :style="`width: ${width}px; height: ${height}px`"
        class="mx-auto mt-0 my-6"
        v-model="croppa"
        :width="width"
        :height="height"
        :accept="'image/*'"
        :zoom-speed="80"
        :placeholder="'Choose Avatar'"
        :placeholder-font-size="14"
        :replace-dop="true"
        prevent-white-space
        @image-remove="remove"/>
      <div class="tooltip">
        <span class="tooltip-description add-image">Click or Drag an Image</span>
        <span class="tooltip-description control-image">Scroll to Zoom</span>
      </div>
    </div>
    <v-row class="justify-space-between">
      <v-col class="flex-grow-0">
        <v-btn @click="remove">Remove</v-btn>
      </v-col>
      <v-col class="flex-grow-0">
        <v-btn @click="generateDataUrl" class="accent">Save</v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script>
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
    };
  },

  methods: {
    closeWidget() {
      EventBus.$emit('close-widget');
    },

    remove() {
      this.croppa.remove();
    },

    generateDataUrl() {
      var self = this;
      this.croppa.generateBlob(blob => {
        var reader = new FileReader();
        reader.readAsDataURL(blob);

        reader.onloadend = function() {
          self.$emit('processed', reader.result);
        }
      });
    }
  }
}
</script>

<style>
.image-cropper .croppa-container canvas {
  box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.24);
}

.image-cropper .croppa-container canvas:hover {
  cursor: pointer;
}

.image-cropper .croppa-container.croppa--has-target canvas:hover {
  cursor: move;
}

.image-cropper .croppa-container.croppa--dropzone {
  background-color: rgba(115, 103, 240, 0.6);
}

.image-cropper .croppa-container svg {
  display: none !important;
}

.image-cropper .image-cropper-container {
  position: relative;
}

.image-cropper .croppa-container:hover:not(.croppa--has-target) + .tooltip .tooltip-description.add-image {
  display: inline-block;
}

.image-cropper .croppa-container.croppa--has-target:hover + .tooltip .tooltip-description.control-image {
  display: inline-block;
}

.image-cropper .tooltip {
  position: absolute;
  text-align: center;
  width: 100%;
  left: 0;
  bottom: -34px;
}

.image-cropper .tooltip .tooltip-description {
  display: none;
  padding: 3px 8px;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 11px;
}
</style>
