<template>
  <div class="order-summary order-summary--product-list">
    <div class="summary-body summary-section summary-product">
      <div class="summary-product-list">
        <table class="product-table">
          <tbody>
            <tr v-for="item in list" :key="item.id" class="product product-has-image clearfix">
              <td>
                <div class="product-thumbnail">
                  <div class="product-thumbnail__wrapper">
                    <img
                      :src="item.images[0]"
                      class="product-thumbnail__image"
                    />
                  </div>
                  <span class="product-thumbnail__quantity" aria-hidden="true">{{item.qty}}</span>
                </div>
              </td>
              <td class="product-info">
                <span class="product-info-name">{{name(item.name)}}</span>
              </td>
              <td class="product-price text-right">{{price(item.total_price)}}₫</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { numberWithDots, shortText } from "@/utils/display";
export default {
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    price() {
      return p => `${numberWithDots(p)}`;
    },
    name() {
      return n => (n === shortText(n) ? n : `${shortText(n)} ...`);
    }
  },
};
</script>

<style>
</style>