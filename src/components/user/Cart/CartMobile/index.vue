<template>
  <div class="cart-droplist__content arrow_box">
    <div class="cart-droplist__status">
      <i class="fa fa-check" aria-hidden="true"></i>
      <span class="cart-counter-list">2</span> Sản phẩm trong giỏ hàng
    </div>
    <div class="mini-list">
      <ul class="list-item-cart">
        <li class="item">
          <product-image />
          <div class="detail-item">
            <div class="product-details">
              <icon-remove />
              <product-name />
            </div>
            <div class="product-details-bottom">
              <span class="price">87.200₫</span>
              <div class="quantity-select">
                <product-quantity />
              </div>
            </div>
          </div>
        </li>
        <li class="item">
          <product-image />
          <div class="detail-item">
            <div class="product-details">
              <icon-remove />
              <product-name />
            </div>
            <div class="product-details-bottom">
              <span class="price">179.000₫</span>
              <div class="quantity-select">
                <product-quantity />
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="top-subtotal">
        Tổng cộng:
        <span class="price total-price">266.200₫</span>
      </div>
      <div class="actions">
        <button
          class="btn-checkout"
          type="button"
          @click="() => $router.push({ path: '/thanh-toan' })"
        >
          <span>
            <i class="fa fa-money" aria-hidden="true"></i> Tiến hành đặt hàng
          </span>
        </button>
        <button
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
import ProductName from "../ProductName";
import ProductImage from "../ProductImage";
import ProductQuantity from "../ProductQuantity";
import IconRemove from "../IconRemove";
export default {
  components: { ProductName, ProductImage, ProductQuantity, IconRemove }
};
</script>

<style>
</style>