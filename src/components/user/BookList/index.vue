<template>
  <div class="container">
    <h1 class="h1_bar_title">
      <span>{{title}}</span>
    </h1>
    <!-- begin list product -->
    <div id="listview_1" class="booklist_grid bottom_upcomming">
      <div class="row">
        <div
          v-for="item in list"
          :key="item.id"
          class="card-carousel-item col-md-2 col-sm-3 col-tn-3 col-xs-6 col-upcomming"
        >
          <div class="div_img_home div_img_listing">
            <router-link :to="item.url" :title="item.name">
              <img :src="item.images[0].url" :alt="item.name" class="img-full img-upcomming" />
            </router-link>
            <span class="saleoff-listing">-{{item.salePercent}}%</span>
          </div>
          <div class="div_book_name_list">
            <router-link :to="item.url" :title="item.name" class="a_book_upcomming">{{item.name}}</router-link>
          </div>
          <div class="author">
            <span>{{item.authorName}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookList",
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
  }
};
</script>

<style>
</style>