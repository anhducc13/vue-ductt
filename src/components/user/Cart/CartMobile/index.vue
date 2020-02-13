<template>
  <div class="cart-droplist__content arrow_box">
    <div class="cart-droplist__status">
      <i class="fa fa-check" aria-hidden="true"></i>
      <span class="cart-counter-list">{{products_of_cart.length}}</span> Sản phẩm trong giỏ hàng
    </div>
    <div class="mini-list">
      <ul class="list-item-cart">
        <li class="item" v-for="item in products_of_cart" :key="item.id">
          <product-image :alt="item.name" :src="item.images[0]" :url="item.url" />
          <div class="detail-item">
            <div class="product-details">
              <icon-remove />
              <product-name :name="item.name" :url="item.url" />
            </div>
            <div class="product-details-bottom">
              <span class="price">{{item.sale_price}}₫</span>
              <div class="quantity-select">
                <product-quantity />
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="top-subtotal">
        Tổng cộng:
        <span class="price total-price">{{price(sub_total)}}₫</span>
      </div>
      <div class="actions">
        <button
          class="btn-checkout"
          type="button"
          @click="toCheckout"
        >
          <span>
            <i class="fa fa-money" aria-hidden="true"></i> Tiến hành đặt hàng
          </span>
        </button>
        <button
          v-if="backToHome"
          class="btn-checkout btn-return"
          type="button"
          @click="() => $router.push({ path: '/' })"
        >
          <span>
            <i class="fa fa-arrow-circle-left" aria-hidden="true"></i> Tiếp tục mua hàng
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { message } from "ant-design-vue";
import { mapState } from "vuex";
import ProductName from "../ProductName";
import ProductImage from "../ProductImage";
import ProductQuantity from "../ProductQuantity";
import IconRemove from "../IconRemove";
import { numberWithDots } from "@/utils/display";
export default {
  components: { ProductName, ProductImage, ProductQuantity, IconRemove },
  props: {
    backToHome: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState("cart", ["products_of_cart", "sub_total"]),
    price() {
      return p => `${numberWithDots(p)}`;
    }
  },
  methods: {
    toCheckout() {
      if (this.products_of_cart.length) {
        this.$router.push({ path: "/thanh-toan" });
      } else {
        message.warning("Không có sản phẩm nào trong giỏ hàng để thanh toán");
      }
    }
  }
};
</script>

<style>
</style>