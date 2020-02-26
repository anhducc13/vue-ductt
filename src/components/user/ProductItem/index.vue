<template>
  <div class="item-inner" v-if="item" @click.prevent="handleGetCurrentBook">
    <div class="stl_full_width">
      <div class="laster-thumb">
        <div class="b-prices-reduc">
          <div class="prices-reduc">
            <span
              class="price-percent-reduction"
            >-{{ priceReducion(item.root_price, item.sale_price) }}%</span>
          </div>
        </div>

        <router-link :to="`/san-pham/${item.url}`" class="prod-img">
          <img :src="item.images[0].url" :alt="item.name" />
        </router-link>

        <span class="tz-shop-meta">
          <a
            href="javascript:void(0);"
            class="tzshopping add_to_cart add-cart"
            title="Mua ngay"
            @click="() => buyNow(item)"
          >
            <i class="fa fa-shopping-cart"></i> Mua ngay
          </a>
          <a
            href="javascript:void(0);"
            class="tzshopping add_to_cart add-cart"
            title="Thêm vào giỏ hàng"
            @click="() => addOneToCart(item)"
          >
            <i class="fa fa-cart-plus"></i> Thêm giỏ hàng
          </a>
        </span>
      </div>
    </div>
    <div class="stl_full_width">
      <div class="right-block clearfix">
        <div class="left_cnt_product">
          <h3>
            <router-link
              :to="`/san-pham/${item.url}`"
              :title="item.name"
            >{{ name(item.short_name) }}</router-link>
          </h3>
          <div class="product-price">
            <span class="price-sale clearfix">
              <small>{{ price(item.sale_price) }}₫</small>
            </span>

            <span class="price-regular">
              <small>{{ price(item.root_price) }}₫</small>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { numberWithDots, shortText } from "@/utils/display";
import cart from "@/mixins/cart";
import {mapActions} from "vuex";

export default {
  name: "ProductItem",
  mixins: [cart],
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    priceReducion() {
      return (root, sale) => `${Math.floor(((root - sale) / root) * 100)}`;
    },
    price() {
      return p => `${numberWithDots(p)}`;
    },
    name() {
      return n => (n === shortText(n) ? n : `${shortText(n)} ...`);
    }
  },
  methods: {
    ...mapActions({
      setCurrentBook: "app/setCurrentBook"
    }),
    addOneToCart(product) {
      this.addToCart(product, 1);
      this.setModalCart(true);
    },
    buyNow(product) {
      this.addToCart(product, 1);
      this.$router.push({ path: "/gio-hang" });
    },
    handleGetCurrentBook(){
      this.setCurrentBook(this.item);
    }
  }
};
</script>

<style>
</style>
