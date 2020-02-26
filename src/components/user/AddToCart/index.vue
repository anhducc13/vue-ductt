<template>
  <div class="box-info-product">
    <div class="add-to-cart">
      <div class="pull-left">
        <div class="pull-left">
          <input
            type="number"
            title="Số lượng"
            min="1"
            value="1"
            v-model="qty"
            max="50"
            maxlength="12"
            id="qty"
            name="quantity"
            class="input-text qty"
          />
        </div>
      </div>
    </div>
    <div class="qnt-addcart clearfix">
      <button
        class="btn-cart add_to_cart_detail button_detail_product"
        title="MUA NGAY"
        type="submit"
        href="javascript:void(0);"
        @click="() => buyNow(currentBook)"
      >
        <i class="fa fa-shopping-cart"></i> Mua ngay
      </button>

     <!-- <button
        href="javascript:void(0);"
        class="btn-cart add_to_cart_detail button_detail_product"
        title="Thêm vào giỏ hàng"
        type="submit"
        @click="() => addToCart(currentBook, qty)"
      >
        <i class="fa fa-shopping-cart"></i> Thêm Vào giỏ hàng
      </button>-->
    </div>
  </div>
</template>

<script>
  import cart from "@/mixins/cart";
  import {mapGetters} from "vuex";

  export default {
    data() {
      return {
        qty: 1
      }
    },
    mixins: [cart],
    computed: mapGetters(['currentBook']),
    methods: {
      buyNow(product) {
        this.addToCart(product, this.qty);
        this.$router.push({ path: "/gio-hang" });
      }
    }
  };
</script>

<style>
</style>
