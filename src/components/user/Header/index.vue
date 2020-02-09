<template>
  <div>
    <header-top />
    <header-container />
    <header-menu />
  </div>
</template>

<script>
import HeaderTop from "./HeaderTop";
import HeaderContainer from "./HeaderContainer";
import HeaderMenu from "./HeaderMenu";
export default {
  name: "Header",
  components: { HeaderTop, HeaderContainer, HeaderMenu }
};
</script>

<style>
</style>