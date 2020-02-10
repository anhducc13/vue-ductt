<template>
  <div>
    <div class="sync1 owl-carousel large-image">
      <div class="item">
        <img
          class="sp-image"
          src="http://bizweb.dktcdn.net/100/197/269/products/90-ngay-dau-tien-lam-sep-outline-9-4-2018.jpg?v=1528345281287"
          alt="90 Ngày Đầu Tiên Làm Sếp (Tái Bản)"
        />
      </div>
      <div class="item">
        <img
          class="sp-image"
          src="http://bizweb.dktcdn.net/100/197/269/products/90-ngay-dau-lam-sep.jpg?v=1496894192413"
          alt="90 Ngày Đầu Tiên Làm Sếp (Tái Bản)"
        />
      </div>
      <div class="item">
        <img
          class="sp-image"
          src="http://bizweb.dktcdn.net/100/197/269/products/90-ngay-dau-lam-sep.jpg?v=1496894192413"
          alt="90 Ngày Đầu Tiên Làm Sếp (Tái Bản)"
        />
      </div>
      <div class="item">
        <img
          class="sp-image"
          src="http://bizweb.dktcdn.net/100/197/269/products/90-ngay-dau-lam-sep.jpg?v=1496894192413"
          alt="90 Ngày Đầu Tiên Làm Sếp (Tái Bản)"
        />
      </div>

      <div class="item">
        <img
          class="sp-image"
          src="http://bizweb.dktcdn.net/100/197/269/products/90-ngay-dau-tien-lam-sep-outline-9-4-2018.jpg?v=1528345281287"
          alt="90 Ngày Đầu Tiên Làm Sếp (Tái Bản)"
        />
      </div>
    </div>

    <div class="sync2 owl-carousel">
      <div class="item">
        <img
          src="http://bizweb.dktcdn.net/100/197/269/products/90-ngay-dau-tien-lam-sep-outline-9-4-2018.jpg?v=1528345281287"
          alt="90 Ngày Đầu Tiên Làm Sếp (Tái Bản)"
        />
      </div>
      <div class="item">
        <img
          src="http://bizweb.dktcdn.net/thumb/small/100/197/269/products/90-ngay-dau-lam-sep.jpg?v=1496894192413"
          alt="90 Ngày Đầu Tiên Làm Sếp (Tái Bản)"
        />
      </div>
      <div class="item">
        <img
          src="http://bizweb.dktcdn.net/thumb/small/100/197/269/products/90-ngay-dau-lam-sep.jpg?v=1496894192413"
          alt="90 Ngày Đầu Tiên Làm Sếp (Tái Bản)"
        />
      </div>
      <div class="item">
        <img
          src="http://bizweb.dktcdn.net/thumb/small/100/197/269/products/90-ngay-dau-lam-sep.jpg?v=1496894192413"
          alt="90 Ngày Đầu Tiên Làm Sếp (Tái Bản)"
        />
      </div>

      <div class="item">
        <img
          src="http://bizweb.dktcdn.net/thumb/small/100/197/269/products/90-ngay-dau-tien-lam-sep-outline-9-4-2018.jpg?v=1528345281287"
          alt="90 Ngày Đầu Tiên Làm Sếp (Tái Bản)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "ImagesView",
  mounted() {
    this.$nextTick(() => {
      this.installOwlCarousel();
    });
  },
  methods: {
    installOwlCarousel: function() {
      $(".sync1").owlCarousel({
        items: 1,
        pagination: false,
        onChanged: this.syncPosition
      });

      $(".sync2").owlCarousel({
        items: 5,
        pagination: false,
        onInitialized: function(el) {
          $(el.target)
            .find(".owl-item")
            .eq(0)
            .addClass("synced");
        }
      });
      $(".sync2").on("click", ".owl-item", function(e) {
        const to = $(this).index();
        e.preventDefault();
        $(".sync1").trigger("to.owl.carousel", to);
      });
    },
    syncPosition(el) {
      const current = el.item.index;
      $(".sync2")
        .find(".owl-item")
        .removeClass("synced")
        .eq(current)
        .addClass("synced");
    }
  }
};
</script>

<style>
</style>