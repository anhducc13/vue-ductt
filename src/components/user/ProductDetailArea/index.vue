<template>
	<div class="product-details-area" v-if="currentBook">
		<div class="product-description">
			<product-info-simple/>
			<add-to-cart/>
			<Promotions/>
			<social-media/>
			<div class="ab-available-notice-button">
				<button
          v-if="ab_notice_btn"
					class="ab-notice-btn"
					title
					type="button"
					style="background-color: rgb(255, 255, 255); color: rgb(255, 54, 39); border-color: rgb(255, 54, 39);"
				>BÁO KHI CÓ HÀNG
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	import Promotions from "../Promotions";
	import SocialMedia from "../SocialMedia";
	import AddToCart from "../AddToCart";
	import ProductInfoSimple from "../ProductInfoSimple";
	import {mapGetters} from "vuex";

	export default {
		components: {Promotions, SocialMedia, AddToCart, ProductInfoSimple},
		computed: {
			...mapGetters(['currentBook']),
			ab_notice_btn() {
        return this.currentBook.status == "Sắp bán" || this.currentBook.status == "Hết hàng";
			}
		}
	};
</script>

<style>
</style>
