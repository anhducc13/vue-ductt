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
                  <span class="product-thumbnail__quantity" aria-hidden="true">{{item.quantity}}</span>
                </div>
              </td>
              <td class="product-info">
                <span class="product-info-name">{{item.name}}</span>
              </td>
              <td class="product-price text-right">{{item.sale_price}}₫</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
</style>