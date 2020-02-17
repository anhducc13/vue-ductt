<template>
  <div class="container mb-5 text-center" v-if="total > size">
    <a-pagination :current="current" :pageSize="size" :total="total" @change="handleChange" />
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 200
    },
    size: {
      type: Number,
      default: 20
    }
  },
  methods: {
    handleChange(page) {
      const currRoute = this.$route;
      this.$router.push({
        ...currRoute,
        query: {
          ...currRoute.query,
          page
        }
      });
    }
  }
};
</script>

<style>
</style>