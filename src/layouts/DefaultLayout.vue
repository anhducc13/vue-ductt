<template>
	<div>
		<Header />
		<slot />
		<Footer />
	</div>
</template>

<script>
import { mapActions } from "vuex";
import Header from "@/components/user/Header";
import Footer from "@/components/user/Footer";
import cart from "@/mixins/cart";

export default {
  components: {
    Header,
    Footer
  },
  mixins: [cart],
  async created() {
    this.reloadCart();
    await this.fetchCategoriesMenu();
  },
  methods: {
    ...mapActions({
      getCart: "cart/getCart",
      fetchCategoriesMenu: "extra/fetchCategoriesMenu"
    })
  }
};
</script>

