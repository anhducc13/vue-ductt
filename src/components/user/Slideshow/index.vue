<template>
  <div class="container">
    <div class="row justify-content-center">
      <div id="field_slideshow" class="slideshow col-xs-12 col-sm-12 col-md-9">
        <div class="slidehow_main module-home">
          <div class="slidehow_owl owl-carousel owl-theme">
            <div class="item">
              <a href="http://ieltslistening.alphabooks.vn/">
                <img
                  src="https://bizweb.dktcdn.net/100/197/269/themes/739166/assets/slider-re2.jpg?1581054730300"
                />
              </a>
            </div>
            <div class="item">
              <a href="triet-ly-lanh-dao-park-hang-seo.html">
                <img
                  src="https://bizweb.dktcdn.net/100/197/269/themes/739166/assets/slider-re1.jpg?1581054730300"
                />
              </a>
            </div>
            <div class="item">
              <a href="top-7-cuon-sach-ve-nghe-thuat-lanh-dao-cua-john-maxwell.html">
                <img
                  src="https://bizweb.dktcdn.net/100/197/269/themes/739166/assets/slider-re4.jpg?1581054730300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "Slideshow",
  components: {},
  mounted() {
    this.$nextTick(() => {
      this.installOwlCarousel();
    });
  },
  methods: {
    installOwlCarousel: function() {
      $(".slidehow_owl").owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
        items: 1,
        nav: true,
        dots: false,
        navText: [
          "<a class='flex-prev-slideshow'><i class='fa fa-angle-left'></i></a>",
          "<a class='flex-next-slideshow'><i class='fa fa-angle-right'></i></a>"
        ]
      });
    }
  }
};
</script>

<style>
</style>