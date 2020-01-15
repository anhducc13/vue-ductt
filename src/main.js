import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "ant-design-vue/dist/antd.css";
import Antd from "ant-design-vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";

import "normalize.css/normalize.css"; // a modern alternative to CSS resets

import store from "./store";

import AdminLayout from "./layouts/AdminLayout.vue";
import DefaultLayout from "./layouts/DefaultLayout.vue";

import "@/styles/index.scss"; // global css

import "./icons"; // icon
import "./permission";
import "./utils/extend-vee-validate";

Vue.config.productionTip = false;
Vue.component("admin-layout", AdminLayout);
Vue.component("default-layout", DefaultLayout);
Vue.component("validation-provider", ValidationProvider);
Vue.component("validation-observer", ValidationObserver);

Vue.use(Antd);

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
