<template>
  <a title="Xóa" class="remove-item-cart fa fa-trash-o" @click="() => removeItemFromCart(pId)" />
</template>

<script>
import cart from "@/mixins/cart";

export default {
  mixins: [cart],
  props: {
    pId: {
      type: Number || String,
      required: true
    }
  }
};
</script>

<style>
</style>