<template>
  <div class="container">
    <div class="row multi-columns-row row-all">
      <div v-for="item in list" :key="item.id" class="col-lg-3 col-md-4 col-sm-6 col-xs-12 row-item">
        <div class="laster-shop-item">
          <product-item :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "../ProductItem";
export default {
  name: "ProductList",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: { ProductItem },
  mounted() {},
  methods: {}
};
</script>

<style>
</style>