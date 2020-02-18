<template>
  <a-modal :footer="null" :visible="openModalCart" @cancel="() => setModalCart(false)">
    <div class="cart-desktop__title" slot="title">
      <a href="/cart">
        <i class="fa fa-shopping-cart" aria-hidden="true"></i> Giỏ hàng của bạn
      </a>
    </div>
    <div class="cart-desktop__thead">
      <div class="cart-desktop__col-1" style="width: 50%">Sản phẩm</div>
      <div class="cart-desktop__col-3" style="width: 25%">Số lượng</div>
      <div class="cart-desktop__col-4" style="width: 25%">Thành tiền</div>
    </div>
    <div class="cart-desktop__tbody">
      <div class="cart-popup__item" v-for="item in products_of_cart" :key="item.id">
        <div class="cart-desktop__col-1" style="width: 50%">
          <div class="cart-popup__item-image">
            <router-link :to="`/san-pham/${item.url}`" :title="item.name">
              <img :alt="name(item.name)" :src="item.images[0].url" width="80" />
            </router-link>
          </div>
          <div class="cart-popup__item-info">
            <p class="cart-popup__item-name">
              <router-link :to="`/san-pham/${item.url}`" :title="item.name">{{name(item.name)}}</router-link>
            </p>
            <p class="cart-popup__item-remove">
              <icon-remove :pId="item.id" />
            </p>
          </div>
        </div>
        <div class="cart-desktop__col-3" style="width: 25%">
          <product-quantity :item="item" />
        </div>
        <div class="cart-desktop__col-4" style="width: 25%">
          <span class="cart-popup__item-price">
            <span
              class="cart-popup__item-price__price total-price-item"
            >{{price(item.total_price)}}₫</span>
          </span>
        </div>
      </div>
    </div>
    <div class="cart-desktop__tfooter">
      <div class="cart-desktop__tfooter-info clearfix">
        <p class="cart-desktop__tfooter-hotline" />
        <p class="cart-desktop__tfooter-total">
          Tổng tiền:
          <span class="total-price">{{ price(sub_total) }}₫</span>
        </p>
      </div>
      <div class="cart-desktop__tfooter-action clearfix">
        <a
          class="button cart-desktop__tfooter-continue"
          title="Tiếp tục mua hàng"
          @click="() => setModalCart(false)"
        >
          <i class="fa fa-arrow-circle-left" aria-hidden="true"></i> Tiếp tục mua hàng
        </a>
        <a
          class="button cart-desktop__tfooter-checkout"
          title="Tiến hành đặt hàng"
          @click="toCheckout"
        >
          <i class="fa fa-money" aria-hidden="true"></i> Tiến hành đặt hàng
        </a>
      </div>
    </div>
  </a-modal>
</template>

<script>
import { message } from "ant-design-vue";
import ProductQuantity from "../ProductQuantity";
import IconRemove from "../IconRemove";
import { numberWithDots, shortText } from "@/utils/display";
import cart from "@/mixins/cart";

export default {
  components: { ProductQuantity, IconRemove },
  mixins: [cart],
  computed: {
    price() {
      return p => `${numberWithDots(p)}`;
    },
    name() {
      return n => (n === shortText(n) ? n : `${shortText(n)} ...`);
    }
  },
  methods: {
    toCheckout() {
      if (this.products_of_cart.length) {
        this.setModalCart(false);
        this.$router.push({ path: "/thanh-toan" });
      } else {
        message.warning("Không có sản phẩm nào trong giỏ hàng để thanh toán");
      }
    }
  }
};
</script>

<style scope>
.ant-modal-body {
  padding-top: 0;
}
.modal-body {
  padding: 0 0 1em;
}
</style>