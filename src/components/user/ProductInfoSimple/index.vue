<template>
  <div v-if="currentBook">
    <h2 itemprop="name">{{currentBook.name}}</h2>
    <div class="short-description">
      <p class="stock-status">
        <b>Tình trạng:&nbsp;</b>{{currentBook.status}}
      </p>

      <div class="price-box-small">
        <p class="box-price">
          <b>Giá bìa:&nbsp;</b>
          <span class="old-price">{{formatPrice(currentBook.root_price)}}</span>
        </p>
        <p class="box-price">
          <b>Giá đang giảm:&nbsp;</b>
          <span class="special-price">{{formatPrice(currentBook.sale_price)}}</span>
        </p>
        <p class="box-price">
          <b>Tiết kiệm:&nbsp;</b>
          <span class="compare-price">
            {{formatComparePrice}}
          </span>
        </p>
      </div>
      <p class="des_content">{{currentBook.short_description}}</p>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
export default {
  computed: {
    ...mapGetters(['currentBook']),
    formatComparePrice(){
      let savPrice = this.currentBook.root_price - this.currentBook.sale_price;
      return this.formatPrice(savPrice)+  ' (-' + Math.round(savPrice / this.currentBook.root_price * 100) + '%)';
    }
  },
  methods: {
    formatPrice(number){
      return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
    }
  }
};
</script>

<style>
</style>
