<template>
	<div class="pdf-zoom">
		<a @click.prevent.stop="zoomIn" :disabled="isDisabled">
			<a-icon type="zoom-in" />
    </a>
		<a @click.prevent.stop="zoomOut" :disabled="isDisabled">
      <a-icon type="zoom-out" />
		</a>
		<a @click.prevent.stop="fitWidth" :disabled="isDisabled">
      <a-icon type="arrows-alt" />
		</a>
		<a @click.prevent.stop="fitAuto" :disabled="isDisabled">
      <a-icon type="shrink" />
		</a>
	</div>
</template>

<script>

	export default {
		name: 'PDFZoom',

		components: {
		},
		props: {
			scale: {
				type: Number
			},
			increment: {
				type: Number,
				default: 0.25,
			},
		},

		computed: {
			isDisabled() {
				return !this.scale;
			},
		},

		methods: {
			zoomIn() {
				this.updateScale(this.scale + this.increment);
			},

			zoomOut() {
				if (this.scale <= this.increment) return;
				this.updateScale(this.scale - this.increment);
			},

			updateScale(scale) {
				this.$emit('change', {scale});
			},

			fitWidth() {
				this.$emit('fit', 'width');
			},

			fitAuto() {
				this.$emit('fit', 'auto');
			},
		},
	}
</script>

<style>
	.pdf-zoom a {
		float: left;
		cursor: pointer;
		display: block;
		border: 1px #333 solid;
		background: white;
		color: #333;
		font-weight: bold;
		line-height: 1.5em;
		width: 1.5em;
		height: 1.5em;
		font-size: 1.5em;
	}
</style>
