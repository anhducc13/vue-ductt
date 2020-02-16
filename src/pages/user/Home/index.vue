<template>
  <div class="fvc" style="width:100%;">
    <section class="columns-container">
      <Slideshow :list="listSildeshow" />
      <product-list-carousel :list="listBookBestSeller" title="Sách bán chạy" />
      <product-list-carousel :list="listBookNew" title="Sách mới" />
      <product-list-carousel :list="listBookForthcoming" title="Sách sắp xuất bản" />
    </section>
  </div>
</template>

<script>
import Slideshow from "@/components/user/Slideshow";
import ProductListCarousel from "@/components/user/ProductListCarousel";
import { getCustomData } from "@/api/home/customData";

const CODE = {
  BOOK_NEW: "book_new",
  BOOK_BEST_SELLER: "book_best_seller",
  BOOK_FORTHCOMING: "book_forthcoming",
  BANNER: "banner"
};

export default {
  components: {
    Slideshow,
    ProductListCarousel
  },
  data() {
    return {
      listSildeshow: [],
      listBookBestSeller: [],
      listBookNew: [],
      listBookForthcoming: [],
      sort: "alpha-desc"
    };
  },
  async created() {
    const { results: listSildeshow } = await getCustomData({
      code: CODE.BANNER
    });
    const { results: listBookBestSeller } = await getCustomData({
      code: CODE.BOOK_BEST_SELLER
    });
    const { results: listBookNew } = await getCustomData({
      code: CODE.BOOK_NEW
    });
    const { results: listBookForthcoming } = await getCustomData({
      code: CODE.BOOK_FORTHCOMING
    });
    this.listSildeshow = listSildeshow;
    this.listBookBestSeller = listBookBestSeller;
    this.listBookNew = listBookNew;
    this.listBookForthcoming = listBookForthcoming;
  },
};
</script>

<style scoped>
</style>