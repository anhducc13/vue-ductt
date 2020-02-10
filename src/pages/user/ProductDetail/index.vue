<template>
  <div class="my-4 container">
    <div class="row">
      <div class="col-xs-12 col-sm-5 col-lg-5 col-md-5">
        <!-- <read-demo /> -->
        <images-view />
      </div>
      <div class="col-xs-12 col-sm-7 col-lg-7 col-md-7">
        <product-detail-area />
      </div>
      <div class="product-overview-tab">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <product-overview />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImagesView from "@/components/user/ImagesView";
import ProductDetailArea from "@/components/user/ProductDetailArea";
import ProductOverview from "@/components/user/ProductOverview";
export default {
  name: "ProductDetail",
  components: { ImagesView, ProductDetailArea, ProductOverview }
};
</script>

<style>
</style>