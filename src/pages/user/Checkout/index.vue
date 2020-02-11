<template>
  <div class="content">
    <div class="banner">
      <div class="wrap">
        <div class="shop logo logo--left">
          <a href="/">
            <img
              class="logo__image logo__image--large"
              alt="Alpha Books"
              src="//bizweb.dktcdn.net/100/197/269/themes/739166/assets/checkout_logo.png?1581054730300"
            />
          </a>
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
          <div class="order-summary order-summary--product-list">
            <div class="summary-body summary-section summary-product">
              <div class="summary-product-list">
                <table class="product-table">
                  <tbody>
                    <tr class="product product-has-image clearfix">
                      <td>
                        <div class="product-thumbnail">
                          <div class="product-thumbnail__wrapper">
                            <img
                              src="//bizweb.dktcdn.net/thumb/thumb/100/197/269/products/thuat-doc-tam.png?v=1568685712587"
                              class="product-thumbnail__image"
                            />
                          </div>
                          <span class="product-thumbnail__quantity" aria-hidden="true">2</span>
                        </div>
                      </td>
                      <td class="product-info">
                        <span
                          class="product-info-name"
                        >Thuật Đọc Tâm - Cẩm nang nhìn thấu tâm lý đối phương</span>
                      </td>
                      <td class="product-price text-right">358.000₫</td>
                    </tr>
                    <tr class="product product-has-image clearfix">
                      <td>
                        <div class="product-thumbnail">
                          <div class="product-thumbnail__wrapper">
                            <img
                              src="//bizweb.dktcdn.net/thumb/thumb/100/197/269/products/thuat-doc-tam.png?v=1568685712587"
                              class="product-thumbnail__image"
                            />
                          </div>
                          <span class="product-thumbnail__quantity" aria-hidden="true">2</span>
                        </div>
                      </td>
                      <td class="product-info">
                        <span
                          class="product-info-name"
                        >Thuật Đọc Tâm - Cẩm nang nhìn thấu tâm lý đối phương</span>
                      </td>
                      <td class="product-price text-right">358.000₫</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="order-summary order-summary--discount">
            <div class="summary-section">
              <div class="form-group m0">
                <div class="field__input-btn-wrapper">
                  <div class="field__input-wrapper">
                    <input
                      name="code"
                      type="text"
                      class="form-control discount_code"
                      placeholder="Nhập mã giảm giá"
                    />
                  </div>
                  <button class="btn btn-primary event-voucher-apply" type="button">Áp dụng</button>
                </div>
              </div>
              <div class="clearfix hide mt-2">
                <div class="pull-left">
                  <i class="fa fa-check applied-discount-status-success" aria-hidden="true" />
                  <i
                    class="fa fa-exclamation-triangle applied-discount-status-warning"
                    aria-hidden="true"
                  />
                </div>
                <div bind="code" class="pull-left applied-discount-code"></div>
                <div class="pull-right">0₫</div>
                <input class="btn btn-delete" type="button" value="×" name="commit" />
              </div>
              <div class="error mt10 hide" bind-show="inValidCode">Mã khuyến mãi không hợp lệ</div>
              <div
                class="error mt10 hide"
                bind-show="!applyWithPromotion &amp;&amp; existCode"
              >Mã khuyến mãi không được áp dụng chung với chương trình khuyến mãi</div>
            </div>
            <hr class="m0" />
          </div>
          <div class="order-summary order-summary--total-lines">
            <div class="summary-section border-top-none--mobile">
              <div class="total-line total-line-subtotal clearfix">
                <span class="total-line-name pull-left">Tạm tính</span>
                <span class="total-line-subprice pull-right">358.000₫</span>
              </div>
              <div class="total-line total-line-shipping clearfix" bind-show="requiresShipping">
                <span class="total-line-name pull-left">Phí vận chuyển</span>
                <span
                  class="total-line-shipping pull-right hide"
                  bind-show="ShippingProvinceId || BillingProvinceId &amp;&amp; !otherAddress || (requiresShipping &amp;&amp; shippingMethods.length > 0)"
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
              <a class="previous-link" href="/cart">
                <i class="fa fa-angle-left fa-lg" aria-hidden="true"></i>
                <span>&nbsp;Quay về giỏ hàng</span>
              </a>
              <input
                class="btn btn-primary btn-checkout"
                data-loading-text="Đang xử lý"
                type="button"
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
            <a href="/">
              <img
                class="logo__image logo__image--large"
                alt="Alpha Books"
                src="//bizweb.dktcdn.net/100/197/269/themes/739166/assets/checkout_logo.png?1581054730300"
              />
            </a>
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

                    <router-link
                      class="layout-flex__item section__title--link"
                      to="/dang-nhap?redirect=/thanh-toan"
                    >
                      <i class="fa fa-user-circle-o fa-lg" aria-hidden="true"></i>
                      Đăng nhập
                    </router-link>
                  </div>
                </div>
                <div class="section__content">
                  <a-form>
                    <a-form-item>
                      <a-input size="large" placeholder="Email" />
                    </a-form-item>
                    <a-form-item>
                      <a-input size="large" placeholder="Họ và tên" />
                    </a-form-item>
                    <a-form-item>
                      <a-input size="large" placeholder="Số điện thoại" />
                    </a-form-item>
                    <a-form-item>
                      <a-input size="large" placeholder="Địa chỉ" />
                    </a-form-item>
                    <a-form-item>
                      <a-select
                        size="large"
                        showSearch
                        placeholder="Chọn tỉnh thành"
                        optionFilterProp="children"
                      >
                        <a-select-option value="jack">Jack</a-select-option>
                        <a-select-option value="lucy">Lucy</a-select-option>
                        <a-select-option value="tom">Tom</a-select-option>
                      </a-select>
                    </a-form-item>
                    <a-form-item>
                      <a-select
                        size="large"
                        showSearch
                        placeholder="Chọn quận huyện"
                        optionFilterProp="children"
                      >
                        <a-select-option value="jack">Jack</a-select-option>
                        <a-select-option value="lucy">Lucy</a-select-option>
                        <a-select-option value="tom">Tom</a-select-option>
                      </a-select>
                    </a-form-item>
                    <a-form-item>
                      <a-checkbox>Giao hàng đến địa chỉ khác</a-checkbox>
                    </a-form-item>
                    <div class="section__header">
                      <h2 class="section__title">
                        <i
                          class="fa fa-id-card-o fa-lg section__title--icon d-lg-none"
                          aria-hidden="true"
                        ></i>
                        <label class="control-label" style="font-size: 18px">Thông tin nhận hàng</label>
                      </h2>
                    </div>
                    <a-form-item>
                      <a-input size="large" placeholder="Email" />
                    </a-form-item>
                    <a-form-item>
                      <a-input size="large" placeholder="Họ và tên" />
                    </a-form-item>
                    <a-form-item>
                      <a-input size="large" placeholder="Số điện thoại" />
                    </a-form-item>
                    <a-form-item>
                      <a-input size="large" placeholder="Địa chỉ" />
                    </a-form-item>
                    <a-form-item>
                      <a-select
                        size="large"
                        showSearch
                        placeholder="Chọn tỉnh thành"
                        optionFilterProp="children"
                      >
                        <a-select-option value="jack">Jack</a-select-option>
                        <a-select-option value="lucy">Lucy</a-select-option>
                        <a-select-option value="tom">Tom</a-select-option>
                      </a-select>
                    </a-form-item>
                    <a-form-item>
                      <a-select
                        size="large"
                        showSearch
                        placeholder="Chọn quận huyện"
                        optionFilterProp="children"
                      >
                        <a-select-option value="jack">Jack</a-select-option>
                        <a-select-option value="lucy">Lucy</a-select-option>
                        <a-select-option value="tom">Tom</a-select-option>
                      </a-select>
                    </a-form-item>
                  </a-form>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-lg-6">
              <div class="section payment-methods p0--desktop">
                <div class="section__header">
                  <h2 class="section__title">
                    <i
                      class="fa fa-credit-card fa-lg section__title--icon d-md-none"
                      aria-hidden="true"
                    ></i>
                    <label class="control-label">Thanh toán</label>
                  </h2>
                </div>
                <div class="section__content boxshadow">
                  <div class="content-box">
                    <div class="content-box__row">
                      <div class="radio-wrapper">
                        <div class="radio__input">
                          <input class="input-radio" type="radio" name="PaymentMethodId" checked />
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
                    </div>

                    <div class="radio-wrapper content-box__row content-box__row--secondary">
                      <div class="blank-slate">
                        <p>Quý khách hàng lưu ý chỉ sử dụng hình thức chuyển khoản khi nhân viên của chúng tôi đã xác nhận đơn hàng.</p>
                      </div>
                    </div>

                    <div class="content-box__row">
                      <div class="radio-wrapper">
                        <div class="radio__input">
                          <input class="input-radio" type="radio" name="PaymentMethodId" />
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
                      class="radio-wrapper content-box__row content-box__row--secondary hide"
                      bind-show="payment_method_id == 201007"
                    >
                      <div class="blank-slate">
                        <p>Nhận hàng rồi thanh toán</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="section d-lg-none">
                <div class="form-group clearfix m0">
                  <input class="btn btn-primary btn-checkout" type="button" value="ĐẶT HÀNG" />
                </div>
                <div class="text-center mt20">
                  <router-link class="previous-link" to="/gio-hang">
                    <i class="fa fa-angle-left fa-lg" aria-hidden="true"></i>
                    <span>Quay về giỏ hàng</span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/styles/checkout.css";
export default {};
</script>

<style scope>
i {
  vertical-align: 0 !important;
}
label {
  font-weight: 700;
}
</style>