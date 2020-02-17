<template>
  <div class="mt-4">
    <box-sort :selected="`${filter.sort_by}-${filter.order_by}`" />
    <product-list :list="listProducts" />
    <div class="container mb-5 text-center">
      <Pagination :current="filter.page" :total="total_items" />
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
        sort_by: this.$route.query.sort_by || "created_at",
        order_by: this.$route.query.order_by || "desc"
      },
      total_items: 0,
      listProducts: []
    };
  },
  methods: {
    async getCategory() {
      document.title = getPageTitle("Văn học");
    },
    async getProductOfCat() {
      const { slug, ...others } = this.filter;
      const { results, total_items } = await productServices.getSaleCategory(
        slug,
        others
      );
      this.total_items = total_items;
      this.listProducts = results;
    },
    changeState() {
      this.filter = {
        ...this.filter,
        slug: this.$route.params.slug,
        page: parseInt(this.$route.query.page || 1),
        order_by: this.$route.query.order_by || "desc",
        sort_by: this.$route.query.sort_by || "created_at"
      };
    }
  },
  watch: {
    async $route() {
      this.changeState();
      await this.getProductOfCat();
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