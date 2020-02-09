<template>
  <div class="container">
    <div class="row">
      <div class="center_column col-12">
        <div class="block horizontal_mode clearfix">
          <h4 class="title_block">
            <a href="sach-moi.html">{{title}}</a>
          </h4>
          <div class="row">
            <div class="product-list-carousel owl-carousel owl-theme">
              <div v-for="item in list" :key="item.id" class="item">
                <product-item :item="item" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import ProductItem from "../ProductItem";
export default {
  name: "ProductListCarousel",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    },
    title: {
      type: String,
      default: "Sách"
    }
  },
  components: { ProductItem },
  mounted() {
    this.$nextTick(() => {
      this.installOwlCarousel();
    });
  },
  methods: {
    installOwlCarousel: function() {
      $(".product-list-carousel").owlCarousel({
        responsive: {
          0: {
            items: 1,
            loop: true,
          },
          486: {
            items: 2,
            loop: true,
          },
          776: {
            items: 3,
            loop: true,
          },
          991: {
            items: 4,
            loop: true
          }
        },
        dots: false,
        nav: true,
        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>'
        ]
      });
    }
  }
};
</script>

<style>
</style>