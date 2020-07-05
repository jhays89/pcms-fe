<template>
  <v-avatar class="profile-image" :color="color" :size="size"> <!-- TODO Wrap in a badge? -->
    <v-img v-if="url" :src="url" contain />
    <span v-else class="white--text headline">{{initials}}</span>
  </v-avatar>
</template>

<script>
export default {
  props: {
    url: String,
    firstName: String,
    lastName: String,
    backgroundColor: String,
    size: Number,
  },
  data() {
    return {

    };
  },
  computed: {
    color() {
      return this.backgroundColor || '#7367f0';
    },
    initials() {
      if(this.firstInitial || this.lastInitial) {
        return this.firstInitial + this.lastInitial;
      }
      else {
        return '- -';
      }
    },
    firstInitial() {
      if(this.firstName) {
        return this.firstName[0];
      }
      else {
        return '';
      }
    },
    lastInitial() {
      if(this.lastName) {
        return this.lastName[0];
      }
      else {
        return '';
      }
    }
  }
}
</script>

<style>
  .profile-image .initials {
    color: #fff;
    text-transform: uppercase;
  }
</style>
