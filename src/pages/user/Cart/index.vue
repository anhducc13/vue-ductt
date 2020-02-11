<template>
  <section class="cart">
    <div class="container">
      <div class="general__title cart--title">
        <h1>
          <span>Giỏ hàng</span>
        </h1>
      </div>

      <div class="bg-cart-page d-none d-sm-block">
        <cart-desktop />
      </div>
      <div class="bg-cart-page-mobile cart-droplist d-sm-none">
        <cart-mobile />
      </div>
    </div>
  </section>
</template>

<script>
import CartMobile from "@/components/user/Cart/CartMobile";
import CartDesktop from "@/components/user/Cart/CartDesktop";
export default {
  components: { CartMobile, CartDesktop }
};
</script>

<style>
</style>