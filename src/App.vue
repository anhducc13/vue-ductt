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
    this.$nextTick(() => {
      $(document).ready(() => {
        new Mmenu("#category-mobile", {
          offCanvas: {
            zposition: "front",
            position: "right"
          }
        });
        new Mmenu("#menu-mobile", {
          offCanvas: {
            zposition: "front",
            position: "left"
          }
        });
      });
    });
  }
};
</script>