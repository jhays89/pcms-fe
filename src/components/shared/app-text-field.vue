<template>
  <v-text-field @input="update" :value="value" outlined dense :label="label" :type="type" :rules="rules"/>
</template>

<script>
export default {
  props: {
    value: String,
    label: String,
    type: String,
    rules: Array
  },
  data() {
    return {

    };
  },
  methods: {
    update(value) {
      this.$emit('input', value);
    }
  }
}
</script>
