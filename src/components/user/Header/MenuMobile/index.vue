<template>
  <div class="d-none">
    <nav id="menu-mobile">
      <ul>
        <li class="root active">
          <router-link to="/">Trang chủ</router-link>
        </li>

        <li class="root">
          <a href="sach-ban-chay.html">SÁCH BÁN CHẠY</a>
        </li>

        <li class="root">
          <router-link to="/khoa-hoc">Khóa học</router-link>
        </li>

        <li class="root">
          <router-link to="/tin-tuc">Tin tức</router-link>
        </li>

        <li class="root">
          <a href="lien-he.html">Liên hệ</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MenuMobile"
};
</script>

<style>
</style>