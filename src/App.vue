<template>
  <div id="app">
    <component :is="layout">
      <router-view :key="$route.path" />
    </component>
  </div>
</template>

<script>
import $ from "jquery";
import Mmenu from "mmenu-js";
import enquireScreen from "./utils/device";
const defaultLayout = "no";
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || defaultLayout) + "-layout";
    }
  },
  created() {
    let _this = this;
    enquireScreen(isMobile => {
      _this.$store.dispatch("app/setDevice", isMobile);
    });
  },
  mounted() {
    new Mmenu($(".category-mobile"));
    document.addEventListener("click", evnt => {
      let anchor = evnt.target.closest('a[href^="#/"]');
      if (anchor) {
        // Go somewhere
        evnt.preventDefault();
      }
    });
  }
};
</script>