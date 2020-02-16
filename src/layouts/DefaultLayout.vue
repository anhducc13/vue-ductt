<script>
import { mapActions } from "vuex";
import Header from "@/components/user/Header";
import Footer from "@/components/user/Footer";
import { getCart as getMyCart } from "@/api/home/checkoutServices";
export default {
  components: {
    Header,
    Footer
  },
  created() {
    this.getCart(getMyCart().data);
  },
  methods: {
    ...mapActions({
      getCart: "cart/getCart"
    })
  }
};
</script>

<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>