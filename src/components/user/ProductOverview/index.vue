<template>
  <div v-if="currentBook">
    <div class="tab-menu-area">
      <ul class="tab-menu">
        <li :class="{active: !isReview}" @click="toggleTab">
          <a style="padding-left:0px;" data-toggle="tab" href="#description">Giới thiệu sách</a>
        </li>
        <li :class="{active: isReview}" @click="toggleTab" >
          <a style="padding-left:0px;" data-toggle="tab" href="#review">Xem trước</a>
        </li>
      </ul>
    </div>
    <div class="tab-content">
      <div id="description" class="tab-pane fade in " :class="{'active show': !isReview}">
        <p style="text-align: justify;">
          {{currentBook.description}}
        </p>
      </div>
      <div id="review" class="tab-pane fade in " :class="{'active show': isReview}">
          <p style="text-align: justify;">
            review {{currentBook.description}}
          </p>
        </div>
      </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  export default {
    data() {
      return {
        isReview: false
      }
    },
    computed: {
      ...mapGetters(['currentBook'])
    },
    methods: {
      toggleTab(){
        this.isReview = !this.isReview;
      }
    }
  };
</script>

<style>
</style>
