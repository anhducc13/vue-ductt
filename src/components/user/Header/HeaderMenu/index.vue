<template>
  <div>
    <categories-mobile />
    <menu-mobile />
    <header-menu-desktop />
    <header-menu-mobile />
  </div>
</template>

<script>
import HeaderMenuDesktop from './HeaderMenuDesktop';
import HeaderMenuMobile from './HeaderMenuMobile';
import CategoriesMobile from '../CategoriesMobile';
import MenuMobile from '../MenuMobile';
export default {
  name: "HeaderMenu",
  components: { HeaderMenuDesktop, HeaderMenuMobile, CategoriesMobile, MenuMobile }
};
</script>

<style>
</style>