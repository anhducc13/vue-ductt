<template>
  <a-layout class="layout-container">
    <drawer v-if="isMobile" :openDrawer="collapsed" @change="onDrawerChange">
      <sider-menu
        :theme="theme"
        :menuData="menuData"
        :collapsible="false"
        @menuSelect="onMenuSelect"
      />
    </drawer>
    <sider-menu
      :theme="theme"
      v-else-if="layout === 'side'"
      :menuData="menuData"
      :collapsible="true"
    />
    <a-layout>
      <global-header :menuData="menuData" />
      <a-layout-content :style="{minHeight: minHeight, margin: '24px 24px 0'}">
        <a-spin :spinning="loading">
          <slot></slot>
        </a-spin>
      </a-layout-content>
      <a-layout-footer style="padding: 0px">
        <global-footer :link-list="footerLinks" :copyright="copyright" />
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import { mapGetters } from "vuex";
import GlobalHeader from "./Admin/components/GlobalHeader";
import Drawer from "@/components/shared/tool/Drawer";
import SiderMenu from "@/components/shared/menu/SiderMenu";
import GlobalFooter from "./Admin/components/GlobalFooter";
import { nav } from "@/_nav";

const minHeight = window.innerHeight - 64 - 24 - 122;

let menuData = [];

export default {
  name: "AdminLayout",
  components: { SiderMenu, Drawer, GlobalHeader, GlobalFooter },
  data() {
    return {
      minHeight: minHeight + "px",
      menuData: menuData,
      showSetting: false
    };
  },
  computed: {
    ...mapGetters([
      "isMobile",
      "theme",
      "layout",
      "footerLinks",
      "copyright",
      "loading",
      "collapsed"
    ])
  },
  methods: {
    onDrawerChange(show) {
      this.collapsed = show;
    },
    onMenuSelect() {
      this.toggleCollapse();
    }
  },
  beforeCreate() {
    menuData = nav;
  }
};
</script>

<style lang="less" scoped>
.layout-container {
  height: 100vh;
}
.setting {
  background-color: #1890ff;
  color: #fff;
  border-radius: 5px 0 0 5px;
  line-height: 40px;
  font-size: 22px;
  width: 40px;
  height: 40px;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);
}
</style>
