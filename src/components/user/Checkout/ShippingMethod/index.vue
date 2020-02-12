<template>
  <div class="section shipping-method">
    <div class="section__header">
      <h2 class="section__title">
        <i class="fa fa-truck fa-lg section__title--icon d-lg-none" aria-hidden="true"></i>
        <label class="control-label">Vận chuyển</label>
      </h2>
    </div>
    <div class="section__content">
      <div class="content-box">
        <div class="content-box__row">
          <div class="radio-wrapper">
            <div class="radio__input">
              <input class="input-radio" type="radio" v-model="shippingMethodName" value="delivery" @change="changeMethod"  />
            </div>
            <label class="radio__label" for="shipping_method_496512">
              <span class="radio__label__primary">Giao hàng tận nơi</span>
              <span v-if="shippingMethodName === 'delivery' && shippingMethodConfig" class="radio__label__accessory">
                <span class="content-box__emphasis">{{shippingMethodConfig.fee}}₫</span>
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shippingMethod: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      shippingMethodName: this.shippingMethod.name,
      shippingMethodConfig: this.shippingMethod.config,
    }
  },
  methods: {
    changeMethod(e) {
      this.$emit('changeShippingMethod', { name: e.target.value, config: { fee: 100000 }});
    }
  }
};
</script>

<style>
</style>