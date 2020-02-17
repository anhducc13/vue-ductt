<template>
  <div id="header_menu" class="d-none d-lg-block">
    <div class="container">
      <div class="row">
        <div class="header-vmegamenu col-md-3">
          <div class="v-megamenu-container mar-top">
            <div class="v-megamenu-title">
              <h3>
                <i class="fa fa-bars"></i> Danh mục sách
                <em class="open-close"></em>
              </h3>
            </div>
            <div class="v-megamenu" style="display:none">
              <ul>
                <li class="level0" v-for="item in categoriesMenu" :key="item.id">
                  <a :href="`/danh-muc/${item.url}`">
                    {{item.short_name}}
                    <i class="fa fa-angle-right" v-if="item.children.length > 0"></i>
                  </a>
                  <ul class="submenu" v-if="item.children.length > 0">
                    <li class="level1" v-for="child in item.children" :key="child.id">
                      <a :href="`/danh-muc/${child.url}`">{{child.short_name}}</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-megamenu col-xs-12 col-md-7">
          <nav id="fieldmegamenu-main">
            <ul>
              <li class="root">
                <router-link to="/">Trang chủ</router-link>
              </li>

              <li class="root">
                <router-link to="sach-ban-chay.html">SÁCH BÁN CHẠY</router-link>
              </li>

              <li class="root">
                <router-link to="/tin-tuc">Tin tức</router-link>
              </li>

              <li class="root">
                <router-link to="lien-he.html">Liên hệ</router-link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="stt-menu col-md-2">
          <div class="st_header">
            <div class="st_img">
              <img src="/assets/images/phonefb3d.png" />
            </div>
            <div class="st_text title_font">
              <a href="tel:1900 2647">1900 2647</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import $ from "jquery";
export default {
  name: "HeaderMenuDesktop",
  mounted() {
    this.$nextTick(() => {
      this.expandCategories();
    });
  },
  computed: {
    ...mapState("extra", ["categoriesMenu"])
  },
  methods: {
    expandCategories() {
      $(".open-close").on("click", function(e) {
        e.preventDefault();
        var $this = $(this);
        $this
          .parents(".v-megamenu-container")
          .find(".v-megamenu")
          .stop()
          .slideToggle();
        $(this).toggleClass("active");
        return false;
      });
    }
  }
};
</script>

<style>
</style>