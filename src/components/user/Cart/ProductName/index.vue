<template>
  <h2 class="product-name">
    <router-link :to="url">{{name}}</router-link>
  </h2>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: false,
      default: "#"
    }
  }
};
</script>

<style>
</style>