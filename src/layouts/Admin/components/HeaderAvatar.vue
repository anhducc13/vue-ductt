<template>
  <a-dropdown style="display: inline-block; height: 100%; vertical-align: initial">
    <span style="cursor: pointer">
      <a-avatar class="avatar" size="small" shape="circle" :src="avatar" />
      <span v-if="!isMobile">{{name}}</span>
    </span>
    <a-menu style="width: 150px" slot="overlay">
      <a-menu-item>
        <a-icon type="user" />
        <span>个人中心</span>
      </a-menu-item>
      <a-menu-item>
        <a-icon type="setting" />
        <span>设置</span>
      </a-menu-item>
      <a-menu-divider />
      <a-menu-item @click="handleLogout">
        <a-icon type="poweroff" />
        <span>退出登录</span>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
import { mapGetters } from "vuex";
import { logout } from "@/api/user";
export default {
  name: "HeaderAvatar",
  computed: {
    ...mapGetters(["name", "isMobile", "avatar"])
  },
  methods: {
    handleLogout() {
      let _this = this;
      _this.$confirm({
        title: "Bạn có muốn đăng xuất?",
        async onOk() {
          await logout();
          console.log("fasdfsdf");
          _this.$router.push({ path: "/admin/login" });
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.avatar {
  margin: 20px 4px 20px 0;
  color: #1890ff;
  background: hsla(0, 0%, 100%, 0.85);
  vertical-align: middle;
}
</style>
