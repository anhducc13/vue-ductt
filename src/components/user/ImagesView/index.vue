<template>
	<a-carousel arrows dotsClass="slick-dots slick-thumb" v-if="currentBook">
		<a slot="customPaging" slot-scope="props">
			<img :src="getImgUrl(props.i)"/>
		</a>
		<div v-for="(item, index) in currentBook.images" :key="index">
			<img :src="item.url"/>
		</div>
	</a-carousel>
</template>

<script>
	import {mapGetters} from 'vuex';
	export default {
		name: "ImagesView",
    props: {
    },
		data() {
			return {
			}
		},
		computed: mapGetters(['currentBook']),
		methods: {
			getImgUrl(i) {
				return this.currentBook.images[i].url;
			}
		},
	};
</script>

<style scoped>
	/* For demo */
	.ant-carousel >>> .slick-dots {
		height: auto;
	}

	.ant-carousel >>> .slick-slide img {
		border: 5px solid #fff;
		display: block;
		margin: auto;
		max-width: 80%;
	}

	.ant-carousel >>> .slick-thumb {
		bottom: -45px;
	}

	.ant-carousel >>> .slick-thumb li {
		width: 60px;
		height: 45px;
	}

	.ant-carousel >>> .slick-thumb li img {
		width: 100%;
		height: 100%;
		filter: grayscale(100%);
	}

	.ant-carousel >>> .slick-thumb li.slick-active img {
		filter: grayscale(0%);
	}
</style>
