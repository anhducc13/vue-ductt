<template>
  <div class="container" id="open_menu_mobile">
    <div class="row">
      <div id="header_logo" class="col-xs-12 col-sm-12 col-md-12 col-lg-3">
        <router-link class="logo" to="/">
          <img
            class="logo img-responsive"
            alt="Alpha Books"
            src="/assets/images/logo_mobilefb3d.png"
          />
        </router-link>
      </div>
      <div
        id="sticky_top"
        class="col-xs-12 col-sm-12 col-md-12 col-lg-9"
        style="margin-top: 36px; right: auto;"
      >
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12" id="header-search">
            <div
              class="cart-total"
              @mouseout="displayCartDetail = false"
              @mouseover="displayCartDetail = true"
            >
              <ul>
                <li>
                  <router-link class="cart-toggler" to="/gio-hang">
                    <span class="cart-no">
                      <span class="cart-icon"></span>
                      <i class="fa fa-shopping-cart"></i> &nbsp;
                      <span id="cart-total">({{totalItems}}</span> sản phẩm)
                    </span>
                  </router-link>
                  <div class="cart-droplist" v-show="displayCartDetail">
                    <cart-mobile />
                  </div>
                </li>
              </ul>
            </div>
            <div class="stt-menu d-lg-none">
              <div class="st_header">
                <div class="st_img d-none d-sm-inline">
                  <img src="assets/images/phonefb3d.png" />
                </div>
                <div class="st_text title_font">
                  <a href="tel:1900 2647">
                    <i class="fa fa-phone" aria-hidden="true"></i>1900 2647
                  </a>
                </div>
              </div>
            </div>
            <div id="search_block_top">
              <form
                class="input-group search-bar"
                action="https://alphabooks.vn/search"
                method="get"
                role="search"
                id="searchbox"
              >
                <input
                  type="search"
                  name="query"
                  value
                  placeholder="Từ khóa tìm kiếm... "
                  class="input-group-field st-default-search-input search-text"
                  autocomplete="off"
                />
                <button class="btn button-search" type="submit">
                  <i class="fa fa-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <cart-modal />
  </div>
</template>

<script>
import CartMobile from "@/components/user/Cart/CartMobile";
import CartModal from "@/components/user/Cart/CartModal";
import cart from "@/mixins/cart";

export default {
  name: "HeaderContainer",
  components: { CartMobile, CartModal },
  mixins: [cart],
  data() {
    return {
      displayCartDetail: false
    };
  },
  computed: {
    totalItems() {
      return this.products_of_cart.reduce(
        (pre, curr) => parseInt(pre + curr.qty),
        0
      );
    }
  }
};
</script>

<style scope>
.cart-no > i,
.st_text > a > i {
  vertical-align: 0 !important;
}
.cart-droplist__status > i {
  vertical-align: 0 !important;
}
</style>