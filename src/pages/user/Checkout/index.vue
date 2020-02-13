<template>
  <validation-observer v-slot="{ handleSubmit }">
    <a-form @submit.prevent="handleSubmit(checkoutOrder)">
      <div class="content">
        <div class="banner">
          <div class="wrap">
            <div class="shop logo logo--left">
              <router-link to="/">
                <img
                  class="logo__image logo__image--large"
                  alt="Alpha Books"
                  src="//bizweb.dktcdn.net/100/197/269/themes/739166/assets/checkout_logo.png?1581054730300"
                />
              </router-link>
            </div>
          </div>
        </div>
        <button class="order-summary-toggle">
          <div class="wrap">
            <h2>
              <label class="control-label">Đơn hàng (2 sản phẩm)</label>
            </h2>
          </div>
        </button>
        <div class="wrap">
          <div class="sidebar">
            <div class="sidebar_header">
              <h2>
                <label class="control-label">Đơn hàng (2 sản phẩm)</label>
              </h2>
              <hr class="full_width" />
            </div>
            <div class="sidebar__content">
              <product-table :list="[]" />
              <div class="order-summary order-summary--total-lines">
                <div class="summary-section border-top-none--mobile">
                  <div class="total-line total-line-subtotal clearfix">
                    <span class="total-line-name pull-left">Tạm tính</span>
                    <span class="total-line-subprice pull-right">358.000₫</span>
                  </div>
                  <div class="total-line total-line-shipping clearfix" bind-show="requiresShipping">
                    <span class="total-line-name pull-left">Phí vận chuyển</span>
                    <span
                      v-if="shippingMethod.name === 'delivery' && shippingMethod.config && shippingMethod.config.fee"
                      class="total-line-shipping pull-right hide"
                    >{{shippingMethod.config.fee}}</span>
                    <span
                      v-else
                      class="total-line-shipping pull-right hide"
                    >Khu vực này không hỗ trợ vận chuyển</span>
                  </div>
                  <div class="total-line total-line-total clearfix">
                    <span class="total-line-name pull-left">Tổng cộng</span>
                    <span class="total-line-price pull-right">358.000₫</span>
                  </div>
                </div>
              </div>
              <div class="form-group clearfix d-none d-lg-block">
                <div class="field__input-btn-wrapper mt10">
                  <router-link class="previous-link" to="/gio-hang">
                    <i class="fa fa-angle-left fa-lg" aria-hidden="true" />
                    <span>Quay về giỏ hàng</span>
                  </router-link>
                  <input
                    class="btn btn-primary btn-checkout"
                    data-loading-text="Đang xử lý"
                    type="submit"
                    value="ĐẶT HÀNG"
                  />
                </div>
              </div>
              <div class="form-group has-error">
                <div class="help-block">
                  <ul class="list-unstyled"></ul>
                </div>
              </div>
            </div>
          </div>
          <div class="main">
            <div class="main_header">
              <div class="shop logo logo--left">
                <router-link to="/">
                  <img
                    class="logo__image logo__image--large"
                    alt="Alpha Books"
                    src="//bizweb.dktcdn.net/100/197/269/themes/739166/assets/checkout_logo.png?1581054730300"
                  />
                </router-link>
              </div>
            </div>
            <div class="main_content">
              <div class="row">
                <div class="col-md-12 col-lg-6">
                  <div class="section">
                    <div class="section__header">
                      <div class="d-flex justify-content-center">
                        <h2 class="section__title layout-flex__item layout-flex__item--stretch">
                          <i
                            class="fa fa-id-card-o fa-lg section__title--icon d-lg-none"
                            aria-hidden="true"
                          ></i>
                          <label class="control-label">Thông tin mua hàng</label>
                        </h2>

                        <!-- <router-link
                          class="layout-flex__item section__title--link"
                          to="/dang-nhap?redirect=/thanh-toan"
                        >
                          <i class="fa fa-user-circle-o fa-lg" aria-hidden="true"></i>
                          Đăng nhập
                        </router-link>-->
                      </div>
                    </div>
                    <!-- <div class="section__content">
                      <validation-provider rules="email" v-slot="{ errors }">
                        <a-form-item
                          label="Email"
                          :help="errors[0]"
                          :validate-status="errors[0] ? 'error': ''"
                        >
                          <a-input placeholder="Nhập email" v-model="buyerInfo.email" />
                        </a-form-item>
                      </validation-provider>
                      <validation-provider name="Họ tên" rules="required" v-slot="{ errors }">
                        <a-form-item
                          label="Họ và tên"
                          :help="errors[0]"
                          :validate-status="errors[0] ? 'error': ''"
                        >
                          <a-input placeholder="Nhập họ và tên" v-model="buyerInfo.name" />
                        </a-form-item>
                      </validation-provider>
                      <validation-provider
                        name="SĐT"
                        rules="required|phoneNumber"
                        v-slot="{ errors }"
                      >
                        <a-form-item
                          label="Số điện thoại"
                          :help="errors[0]"
                          :validate-status="errors[0] ? 'error': ''"
                        >
                          <a-input placeholder="Nhập SĐT" v-model="buyerInfo.phone_number" />
                        </a-form-item>
                      </validation-provider>
                      <validation-provider
                        name="Tỉnh / Thành phố"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <a-form-item
                          label="Tỉnh / Thành phố"
                          name="Họ tên"
                          :help="errors[0]"
                          :validate-status="errors[0] ? 'error': ''"
                        >
                          <a-select
                            v-model="buyerInfo.city_id"
                            showSearch
                            placeholder="Chọn Tỉnh / Thành phố"
                            optionFilterProp="children"
                          >
                            <a-select-option
                              v-for="item in buyerInfo.cities"
                              :key="item.id"
                              :value="item.id"
                            >{{item.name}}</a-select-option>
                          </a-select>
                        </a-form-item>
                      </validation-provider>
                      <validation-provider name="Quận / Huyện" rules="required" v-slot="{ errors }">
                        <a-form-item
                          label="Quận / Huyện"
                          :help="errors[0]"
                          :validate-status="errors[0] ? 'error': ''"
                        >
                          <a-select placeholder="Chọn Quận / Huyện" v-model="buyerInfo.district_id">
                            <a-select-option
                              v-for="item in buyerInfo.districts"
                              :key="item.id"
                              :value="item.id"
                            >{{item.name}}</a-select-option>
                          </a-select>
                        </a-form-item>
                      </validation-provider>
                      <validation-provider name="Phường / Xã" rules="required" v-slot="{ errors }">
                        <a-form-item
                          label="Phường / Xã"
                          :help="errors[0]"
                          :validate-status="errors[0] ? 'error': ''"
                        >
                          <a-select placeholder="Chọn phường / xã" v-model="buyerInfo.ward_id">
                            <a-select-option
                              v-for="item in buyerInfo.wards"
                              :key="item.id"
                              :value="item.id"
                            >{{item.name}}</a-select-option>
                          </a-select>
                        </a-form-item>
                      </validation-provider>
                      <a-form-item label="Địa chỉ chi tiết">
                        <a-input placeholder="Nhập địa chỉ" v-model="buyerInfo.address" />
                      </a-form-item>
                      <a-form-item>
                        <a-checkbox v-model="otherReceived">Giao hàng đến địa chỉ khác</a-checkbox>
                      </a-form-item>

                      <a-form-item label="Ghi chú">
                        <a-textarea placeholder="Nhập ghi chú" :rows="3" v-model="buyerInfo.note" />
                      </a-form-item>
                    </div>-->
                  </div>
                </div>
                <div class="col-md-12 col-lg-6">
                  <!-- <div v-if="otherReceived" class="mt-3 mt-lg-0">
                    <div class="section__header">
                      <h2 class="section__title">
                        <i
                          class="fa fa-id-card-o fa-lg section__title--icon d-lg-none"
                          aria-hidden="true"
                        ></i>
                        <label class="control-label">Thông tin nhận hàng</label>
                      </h2>
                    </div>
                    <validation-provider
                      v-slot="{ errors }"
                      :rules="`${otherReceived ? 'email' : ''}`"
                    >
                      <a-form-item
                        label="Email"
                        :help="errors[0]"
                        :validate-status="errors[0] ? 'error': ''"
                      >
                        <a-input placeholder="Nhập email" v-model="receiverInfo.email" />
                      </a-form-item>
                    </validation-provider>
                    <validation-provider
                      name="Họ tên"
                      :rules="`${otherReceived ? 'required' : ''}`"
                      v-slot="{ errors }"
                    >
                      <a-form-item
                        label="Họ và tên"
                        :help="errors[0]"
                        :validate-status="errors[0] ? 'error': ''"
                      >
                        <a-input placeholder="Nhập họ và tên" v-model="receiverInfo.name" />
                      </a-form-item>
                    </validation-provider>
                    <validation-provider
                      name="SĐT"
                      :rules="`${otherReceived ? 'required|phoneNumber' : ''}`"
                      v-slot="{ errors }"
                    >
                      <a-form-item
                        label="Số điện thoại"
                        :help="errors[0]"
                        :validate-status="errors[0] ? 'error': ''"
                      >
                        <a-input placeholder="Nhập SĐT" v-model="receiverInfo.phone_number" />
                      </a-form-item>
                    </validation-provider>
                    <validation-provider
                      name="Tỉnh / Thành phố"
                      :rules="`${otherReceived ? 'required' : ''}`"
                      v-slot="{ errors }"
                    >
                      <a-form-item
                        label="Tỉnh / Thành phố"
                        name="Họ tên"
                        :help="errors[0]"
                        :validate-status="errors[0] ? 'error': ''"
                      >
                        <a-select
                          v-model="receiverInfo.city_id"
                          showSearch
                          placeholder="Chọn Tỉnh / Thành phố"
                          optionFilterProp="children"
                        >
                          <a-select-option
                            v-for="item in receiverInfo.cities"
                            :key="item.id"
                            :value="item.id"
                          >{{item.name}}</a-select-option>
                        </a-select>
                      </a-form-item>
                    </validation-provider>
                    <validation-provider
                      name="Quận / Huyện"
                      :rules="`${otherReceived ? 'required' : ''}`"
                      v-slot="{ errors }"
                    >
                      <a-form-item
                        label="Quận / Huyện"
                        :help="errors[0]"
                        :validate-status="errors[0] ? 'error': ''"
                      >
                        <a-select
                          placeholder="Chọn Quận / Huyện"
                          v-model="receiverInfo.district_id"
                        >
                          <a-select-option
                            v-for="item in receiverInfo.districts"
                            :key="item.id"
                            :value="item.id"
                          >{{item.name}}</a-select-option>
                        </a-select>
                      </a-form-item>
                    </validation-provider>
                    <validation-provider
                      name="Phường / Xã"
                      :rules="`${otherReceived ? 'required' : ''}`"
                      v-slot="{ errors }"
                    >
                      <a-form-item
                        label="Phường / Xã"
                        :help="errors[0]"
                        :validate-status="errors[0] ? 'error': ''"
                      >
                        <a-select placeholder="Chọn phường / xã" v-model="receiverInfo.ward_id">
                          <a-select-option
                            v-for="item in receiverInfo.wards"
                            :key="item.id"
                            :value="item.id"
                          >{{item.name}}</a-select-option>
                        </a-select>
                      </a-form-item>
                    </validation-provider>
                    <a-form-item label="Địa chỉ chi tiết">
                      <a-input placeholder="Nhập địa chỉ" v-model="receiverInfo.address" />
                    </a-form-item>
                  </div>-->
                  <shipping-method
                    v-if="shippingMethod.config && shippingMethod.config.fee"
                    :shippingMethod="shippingMethod"
                    @changeShippingMethod="(value) => paymentMethod = value"
                  />
                  <payment-method
                    :paymentMethod="paymentMethod"
                    @changePaymentMethod="(value) => paymentMethod = value"
                  />
                  <div class="section d-lg-none">
                    <div class="form-group clearfix m0">
                      <input class="btn btn-primary btn-checkout" type="submit" value="ĐẶT HÀNG" />
                    </div>
                    <div class="text-center mt20">
                      <router-link class="previous-link" to="/gio-hang">
                        <i class="fa fa-angle-left fa-lg" aria-hidden="true"></i>
                        <span class="ml-1">Quay về giỏ hàng</span>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a-form>
  </validation-observer>
</template>

<script>
import PaymentMethod from "@/components/user/Checkout/PaymentMethod";
import ShippingMethod from "@/components/user/Checkout/ShippingMethod";
import ProductTable from "@/components/user/Checkout/ProductTable";
import { checkout } from "@/utils/checkout";
export default {
  components: { PaymentMethod, ShippingMethod, ProductTable },
  data() {
    return {
      otherReceived: false,
      paymentMethod: "offline",
      shippingMethod: {
        name: "delivery",
        config: null
      },
      buyerInfo: {
        cities: [],
        districts: [],
        wards: [],
        email: "",
        name: "",
        phoneNumber: "",
        city_id: undefined,
        district_id: undefined,
        ward_id: undefined,
        address: "",
        note: ""
      },
      receiverInfo: {
        cities: [],
        districts: [],
        wards: [],
        email: "",
        name: "",
        phone_number: "",
        city_id: undefined,
        district_id: undefined,
        ward_id: undefined,
        address: ""
      }
    };
  },
  methods: {
    checkoutOrder() {
      checkout();
    }
  },
  watch: {
    "buyerInfo.city_id": {
      handler() {
        this.buyerInfo.district_id = undefined;
        this.buyerInfo.ward_id = undefined;
      },
      deep: true
    },
    "buyerInfo.district_id": {
      handler() {
        this.buyerInfo.ward_id = undefined;
      },
      deep: true
    },
    "buyerInfo.ward_id": {
      handler() {},
      deep: true
    },
    "receiverInfo.city_id": {
      handler() {
        this.receiverInfo.district_id = undefined;
        this.receiverInfo.ward_id = undefined;
      },
      deep: true
    },
    "receiverInfo.district_id": {
      handler() {
        this.receiverInfo.ward_id = undefined;
      },
      deep: true
    },
    "receiverInfo.ward_id": {
      handler() {},
      deep: true
    }
  }
};
</script>

<style scope>
i {
  vertical-align: 0 !important;
}
.section__title label {
  font-weight: 700;
}
.ant-form-item {
  margin-bottom: 0;
}
</style>