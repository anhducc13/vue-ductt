import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import Element from "element-ui"
import Cookies from "js-cookie"

import store from "./store";

import AdminLayout from "./layouts/AdminLayout.vue"
import DefaultLayout from "./layouts/DefaultLayout.vue"

Vue.config.productionTip = false
Vue.component("admin-layout", AdminLayout)
Vue.component("default-layout", DefaultLayout)

Vue.use(Element, {
  size: Cookies.get("size") || "medium" // set element-ui default size
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
