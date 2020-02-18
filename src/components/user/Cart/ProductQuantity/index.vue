<template>
  <div>
    <button class="reduced items-count btn-minus" type="button" @click="() => changeQty(-1)">–</button>
    <input
      type="text"
      min="1"
      step="1"
      @keypress="onlyNumber"
      class="input-text number-sidebar"
      v-model="item.qty"
      @change="emitChange"
    />
    <button class="increase items-count btn-plus" type="button" @click="() => changeQty(1)">+</button>
  </div>
</template>

<script>
import cart from "@/mixins/cart";

export default {
  mixins: [cart],
  props: {
    item: {
      type: Object,
      required: true
    },
    onChange: {
      type: Function,
      default() {
        return () => {};
      }
    }
  },
  methods: {
    changeQty(qty) {
      if (this.item.qty === 1 && qty < 0) {
        return false;
      }
      this.item.qty = parseInt(this.item.qty) + parseInt(qty);
      this.emitChange();
    },
    emitChange() {
      this.changeQtyCart(this.item);
    },
    onlyNumber($event) {
      let keyCode = $event.keyCode ? $event.keyCode : $event.which;
      if (keyCode < 48 || keyCode > 57 || keyCode == 46) {
        // 46 is dot
        $event.preventDefault();
      }
    }
  }
};
</script>

<style>
</style>