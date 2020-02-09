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
            <div class="cart-total">
              <ul>
                <li>
                  <a class="cart-toggler" href="cart.html">
                    <span class="cart-no">
                      <span class="cart-icon"></span>
                      <i class="fa fa-shopping-cart"></i> (
                      <span id="cart-total">0</span>) sản phẩm
                    </span>
                  </a>
                  <div class="cart-droplist d-none d-sm-block">
                    <div class="cart-droplist__content arrow_box">
                      <div class="cart-droplist__status">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        <span class="cart-counter-list">0</span> Sản phẩm trong giỏ hàng
                      </div>
                      <div id="cart-sidebar" class="mini-list"></div>
                    </div>
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
  </div>
</template>

<script>
export default {
  name: "HeaderContainer"
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