<template>
  <v-avatar class="profile-image" :color="color" :size="size">
    <v-img v-if="url" :src="url" contain />
    <span v-else class="white--text headline text-uppercase">{{initials}}</span>
  </v-avatar>
</template>

<script>
export default {
  props: {
    url: String,
    firstName: String,
    lastName: String,
    size: Number,
  },
  data() {
    return {
      color: '#7367f0'
    };
  },
  computed: {
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
