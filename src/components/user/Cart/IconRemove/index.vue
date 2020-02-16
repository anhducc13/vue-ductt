<template>
  <a title="Xóa" class="remove-item-cart fa fa-trash-o" @click="() => removeItemFromCart()" />
</template>

<script>
import { mapActions } from "vuex";
import { getCart as getMyCart, removeFromCart } from "@/api/home/checkoutServices";
export default {
  props: {
    pId: {
      type: Number || String,
      required: true
    }
  },
  methods: {
    ...mapActions({
      getCart: "cart/getCart"
    }),
    removeItemFromCart() {
      removeFromCart(this.pId);
      this.getCart(getMyCart().data)
    }
  }
};
</script>

<style>
</style>