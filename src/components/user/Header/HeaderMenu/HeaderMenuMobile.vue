<template>
  <div id="header_mobile_menu" class="navbar-inactive d-lg-none">
    <div class="container">
      <div class="fieldmm-nav col-sm-12 col-xs-12">
        <div class="brand pull-left">
          <a href="#menu-mobile">
            <i class="fa fa-bars"></i> Menu
          </a>
        </div>
        <div class="brand pull-right">
          <a href="#category-mobile">
            Danh mục
            <i class="fa fa-bars"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderMenuMobile"
};
</script>

<style scope>
  .brand > a > i {
    vertical-align: 0 !important;
  }
</style>