<script>
import Header from "@/components/user/Header";
import Footer from "@/components/user/Footer";
export default {
  components: {
    Header,
    Footer
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