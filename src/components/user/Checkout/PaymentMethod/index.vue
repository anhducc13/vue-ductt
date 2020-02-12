<template>
  <div class="section payment-methods p0--desktop mt-2">
    <div class="section__header">
      <h2 class="section__title">
        <i class="fa fa-credit-card fa-lg section__title--icon d-md-none" aria-hidden="true"></i>
        <label class="control-label">Thanh toán</label>
      </h2>
    </div>
    <div class="section__content boxshadow">
      <div class="content-box">
        <!-- <div class="content-box__row">
          <div class="radio-wrapper">
            <div class="radio__input"> 
              <input class="input-radio" type="radio" v-model="value" value="online" @change="changeMethod" />
            </div>
            <label class="radio__label">
              <span class="radio__label__primary">Chuyển khoản qua ngân hàng</span>
              <span class="radio__label__accessory">
                <ul>
                  <li class="payment-icon-v2 payment-icon--3">
                    <i class="fa fa-money payment-icon-fa" aria-hidden="true"></i>
                  </li>
                </ul>
              </span>
            </label>
          </div>
        </div> -->

        <div v-if="paymentMethod === 'online'" class="radio-wrapper content-box__row content-box__row--secondary">
          <div class="blank-slate">
            <p>Quý khách hàng lưu ý chỉ sử dụng hình thức chuyển khoản khi nhân viên của chúng tôi đã xác nhận đơn hàng.</p>
          </div>
        </div>

        <div class="content-box__row">
          <div class="radio-wrapper">
            <div class="radio__input">
              <input class="input-radio" type="radio" v-model="value" value="offline" @change="changeMethod" />
            </div>
            <label class="radio__label" for="payment_method_201007">
              <span class="radio__label__primary">Thanh toán khi giao hàng (COD)</span>
              <span class="radio__label__accessory">
                <ul>
                  <li class="payment-icon-v2 payment-icon--4">
                    <i class="fa fa-money payment-icon-fa" aria-hidden="true"></i>
                  </li>
                </ul>
              </span>
            </label>
          </div>
        </div>

        <div
          v-if="paymentMethod === 'offline'"
          class="radio-wrapper content-box__row content-box__row--secondary"
        >
          <div class="blank-slate">
            <p>Nhận hàng rồi thanh toán</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    paymentMethod: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      value: this.paymentMethod
    }
  },
  methods: {
    changeMethod(e) {
      this.$emit('changePaymentMethod', e.target.value);
    }
  }
};
</script>

<style>
</style>