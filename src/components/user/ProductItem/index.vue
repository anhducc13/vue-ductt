<template>
  <div class="item-inner">
    <div class="stl_full_width">
      <div class="laster-thumb">
        <div class="b-prices-reduc">
          <div class="prices-reduc">
            <span class="price-percent-reduction">-10%</span>
          </div>
        </div>

        <a href="hbr-onpoint-boxset-9-cuon.html" class="prod-img">
          <img
            :src="item.images[0]"
            :alt="item.name"
          />
        </a>
        <form
          action="https://alphabooks.vn/cart/add"
          method="post"
          class="variants"
          id="product-actions-14956498"
          enctype="multipart/form-data"
        >
          <span class="tz-shop-meta">
            <input type="hidden" name="variantId" value="25662565" />
            <a href="javascript:void(0);" class="tzshopping add_to_cart add-cart" title="Mua ngay">
              <i class="fa fa-shopping-cart"></i> Mua ngay
            </a>
          </span>
        </form>
      </div>
    </div>
    <div class="stl_full_width">
      <div class="right-block clearfix">
        <div class="left_cnt_product">
          <h3>
            <a href="hbr-onpoint-boxset-9-cuon.html" title="HBR ONPOINT BOXSET (9 cuốn)">
              {{item.name}}
            </a>
          </h3>
          <div class="product-price">
            <span class="price-sale clearfix">
              <small>{{item.sale_price}}₫</small>
            </span>

            <span class="price-regular">
              <small>{{item.root_price}}₫</small>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    item: {
      type: Object,
      required: true
    },
  },
};
</script>

<style>
</style>