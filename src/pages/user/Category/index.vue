<template>
  <div class="mt-4">
    <box-sort :selected="filter.sortBy" />
    <product-list :list="listProducts" />
    <div class="container mb-5 text-center">
      <Pagination :current="filter.page" />
    </div>
  </div>
</template>

<script>
import BoxSort from "@/components/user/BoxSort";
import Pagination from "@/components/user/Pagination";
import ProductList from "@/components/user/ProductList";
import getPageTitle from "@/utils/get-page-title";
import { productServices } from "@/api/home";
export default {
  components: { BoxSort, ProductList, Pagination },
  data() {
    return {
      filter: {
        slug: this.$route.params.slug,
        page: parseInt(this.$route.query.page || 1),
        sortBy: this.$route.query.sort || "created-desc"
      },
      listProducts: []
    };
  },
  methods: {
    async getCategory() {
      document.title = getPageTitle("Văn học");
    },
    async getProductOfCat() {
      const { results } = await productServices.getSaleCategory(this.filter);
      this.listProducts = results;
    },
    changeState() {
      this.filter = {
        ...this.filter,
        slug: this.$route.params.slug,
        page: parseInt(this.$route.query.page || 1),
        sortBy: this.$route.query.sort || "created-desc"
      }
    }
  },
  watch: {
    $route() {
      this.getProductOfCat();
      this.changeState()
    }
  },
  created() {
    this.getCategory();
    this.getProductOfCat();
  }
};
</script>

<style>
</style>