<template>
  <div class="container">
    <div class="row justify-content-center">
      <div v-if="list.length" id="field_slideshow" class="slideshow col-xs-12 col-sm-12 col-md-9">
        <div class="slidehow_main module-home">
          <div class="slidehow_owl owl-carousel owl-theme">
            <div class="item" v-for="item in list" :key="item.id">
              <router-link :to="to(item.url, item.type)" :title="item.name">
                <img :src="item.images[0]" :alt="item.name" />
              </router-link>
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
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    to() {
      return (url, type) => {
        switch (type) {
          case "product":
            return `/san-pham/${url}`;
          case "news":
            return `/bai-viet/${url}`;
          default:
            return "#";
        }
      };
    }
  },
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
  },
  watch: {
    list() {
      this.$nextTick(() => {
        this.installOwlCarousel();
      });
    }
  }
};
</script>

<style>
</style>