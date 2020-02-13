<template>
  <div>
    <!-- <header-top /> -->
    <header-container />
    <header-menu />
  </div>
</template>

<script>
import HeaderContainer from "./HeaderContainer";
import HeaderMenu from "./HeaderMenu";
export default {
  name: "Header",
  components: { HeaderContainer, HeaderMenu }
};
</script>

<style>
</style>