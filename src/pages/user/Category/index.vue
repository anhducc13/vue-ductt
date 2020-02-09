<template>
  <div class="mt-4">
    <box-sort :selected="sortBy" v-on:onChangeBoxSort="handleChangeSortField" />
    <product-list :list="listProducts" />
  </div>
</template>

<script>
import BoxSort from '@/components/user/BoxSort';
import ProductList from '@/components/user/ProductList';
import getPageTitle from "@/utils/get-page-title";
export default {
  components: { BoxSort, ProductList },
  data() {
    return {
      sortBy: 'created-desc',
      listProducts: []
    }
  },
  mounted() {
    const slugCat = this.$route.params.slug;
    this.getProductOfCat()
    console.log(slugCat)
  },
  methods: {
    async getProductOfCat() {
      document.title = getPageTitle("Văn học");
    },
    handleChangeSortField(value) {
      this.sortBy = value;
    }
  }
}
</script>

<style>

</style>