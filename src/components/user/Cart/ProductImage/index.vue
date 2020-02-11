<template>
  <router-link class="product-image" :title="alt" :to="src">
    <img width="75" height="auto" :alt="alt" :src="src" />
  </router-link>
</template>

<script>
export default {
  props: {
    alt: {
      type: String,
      default: "Hình ảnh"
    },
    src: {
      type: String,
      required: true
    },
    url: {
      type: String,
      default: "#"
    }
  }
};
</script>

<style>
</style>