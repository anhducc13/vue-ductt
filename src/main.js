import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "ant-design-vue/dist/antd.css";
import Antd from "ant-design-vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import firebase from "firebase/app";
import "firebase/database";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "owl.carousel";

import "mmenu-js/dist/mmenu.css";
import "mmenu-js/dist/mmenu.js";

import "normalize.css/normalize.css"; // a modern alternative to CSS resets

import store from "./store";

import AdminLayout from "./layouts/AdminLayout.vue";
import DefaultLayout from "./layouts/DefaultLayout.vue";
import NoLayout from "./layouts/NoLayout.vue";

import "@/styles/index.scss"; // global css

import "./icons"; // icon
import "./permission";
import "./utils/extend-vee-validate";

const firebaseConfig = {
  apiKey: "AIzaSyAcjbrVQyOOlY-SadQ8TWmldob2SjH5trM",
  authDomain: "ductt-217110.firebaseapp.com",
  databaseURL: "https://ductt-217110.firebaseio.com",
  projectId: "ductt-217110",
  storageBucket: "ductt-217110.appspot.com",
  messagingSenderId: "995134750057",
  appId: "1:995134750057:web:59e89139b7fa27cd9251f8"
};

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;
Vue.component("admin-layout", AdminLayout);
Vue.component("default-layout", DefaultLayout);
Vue.component("no-layout", NoLayout);
Vue.component("validation-provider", ValidationProvider);
Vue.component("validation-observer", ValidationObserver);

Vue.use(Antd);

const vueApp = new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});

export default vueApp;
