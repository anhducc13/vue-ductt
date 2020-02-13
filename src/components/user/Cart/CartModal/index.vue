<template>
  <a-modal :footer="null" :visible="openModalCart" @cancel="() => setModalCart(false)">
    <div class="cart-desktop__title" slot="title">
      <a href="/cart">
        <i class="fa fa-shopping-cart" aria-hidden="true"></i> Giỏ hàng của bạn (
        <span class="cart-popup-count">{{products_of_cart.length}}</span> sản phẩm)
      </a>
    </div>
    <div class="modal-body">
      <p class="cart-desktop__status">
        <i class="fa fa-check" aria-hidden="true"></i> Thêm thành công vào giỏ hàng
      </p>
    </div>
    <div class="cart-desktop__thead">
      <div class="cart-desktop__col-1">Sản phẩm</div>
      <div class="cart-desktop__col-2">Đơn giá</div>
      <div class="cart-desktop__col-3">Số lượng</div>
      <div class="cart-desktop__col-4">Thành tiền</div>
    </div>
    <div class="cart-desktop__tbody"></div>
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
import { mapState, mapActions } from "vuex";
import { numberWithDots } from "@/utils/display";
export default {
  computed: {
    ...mapState("cart", ["openModalCart", "products_of_cart", "sub_total"]),
    price() {
      return p => `${numberWithDots(p)}`;
    }
  },
  methods: {
    ...mapActions({
      setModalCart: "cart/setModalCart"
    }),
    toCheckout() {
      this.setModalCart(false);
      this.$router.push({ path: "/thanh-toan" });
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