<template>
  <div class="fvc" style="width:100%;">
    <section class="columns-container">
      <Slideshow />
      <product-list-carousel
        v-for="item in Array(3)"
        :key="item"
        :list="listProduct"
        title="Sách mới"
      />
    </section>
  </div>
</template>

<script>
import uuid from "uuid";
import Slideshow from "@/components/user/Slideshow";
import ProductListCarousel from "@/components/user/ProductListCarousel";
export default {
  components: {
    Slideshow,
    ProductListCarousel
  },
  data() {
    return {
      listProduct: [],
      listArticle: [],
      sort: "alpha-desc"
    };
  },
  mounted() {
    console.log(this.$router);
    const listProduct = [];
    for (let i = 0; i < 20; i++) {
      listProduct.push({
        id: uuid.v4(),
        name: "HBR ONPOINT BOXSET (9 cuốn)",
        url: "",
        images: [
          "https://bizweb.dktcdn.net/100/197/269/products/docton.jpg?v=1566442814243"
        ],
        root_price: 150000,
        sale_price: 120000
      });
    }
    this.listProduct = listProduct;
  },
  created() {}
};
</script>

<style scoped>
</style>