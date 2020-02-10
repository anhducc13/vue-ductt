<template>
  <div class="box-info-product">
    <div class="add-to-cart">
      <div class="pull-left">
        <div class="pull-left">
          <input
            type="number"
            title="Số lượng"
            min="1"
            value="1"
            max="50"
            maxlength="12"
            id="qty"
            name="quantity"
            class="input-text qty"
          />
        </div>
      </div>
    </div>
    <div class="qnt-addcart clearfix">
      <button
        class="btn-cart add_to_cart_detail button_detail_product"
        title="MUA NGAY"
        type="submit"
      >
        <i class="fa fa-shopping-cart"></i> Mua ngay
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>