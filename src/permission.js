import router from "./router";
import store from "./store";
import { Message } from "element-ui";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { getToken, removeToken } from "@/utils/auth";
import getPageTitle from "@/utils/get-page-title";

NProgress.configure({ showSpinner: false });

const whiteList = ["/admin/login"];

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  document.title = getPageTitle(to.meta.title);
  const hasToken = getToken();
  const isAdmin = store.getters.admin;

  if (to.path.startsWith("/admin")) {
    if (hasToken) {
      if (isAdmin) {
        if (to.path === "/admin/login") {
          next({ path: "/admin" });
          NProgress.done();
        } else {
          next();
        }
      } else {
        try {
          await store.dispatch("user/getInfo");
          next({ ...to, replace: true });
        } catch (error) {
          removeToken();
          Message.error(error || "Has Error");
          if (to.path === "/admin/login") {
            next();
          } else {
            next(`/admin/login?redirect=${to.path}`);
          }
          NProgress.done();
        }
      }
    } else {
      if (whiteList.indexOf(to.path) !== -1) {
        next();
      } else {
        next(`/admin/login?redirect=${to.path}`);
        NProgress.done();
      }
    }
  } else {
    if (hasToken) {
      if ([true, false].includes(isAdmin)) {
        next();
      } else {
        try {
          await store.dispatch("user/getInfo");
          next({ ...to, replace: true });
        } catch (error) {
          removeToken();
          next();
        }
      }
    } else {
      next();
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});
