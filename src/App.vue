<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import enquireScreen from './utils/device'
const defaultLayout = "default";
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || defaultLayout) + "-layout";
    }
  },
  created () {
    let _this = this
    enquireScreen(isMobile => {
      _this.$store.dispatch('app/setDevice', isMobile)
    })
  }
};
</script>