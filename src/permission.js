import router from "./router";
import store from "./store";
import { Message } from "element-ui";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import { getToken } from "@/utils/auth"; // get token from cookie
import getPageTitle from "@/utils/get-page-title";

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ["/admin/login"]; // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start();

  // set page title
  document.title = getPageTitle(to.meta.title);

  // determine whether the user has logged in
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
        //
        try {
          // get user info
          // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
          const { admin } = await store.dispatch("user/getInfo");
          console.log(admin);

          // generate accessible routes map based on roles
          // const accessRoutes = await store.dispatch(
          //   "permission/generateRoutes",
          //   admin
          // );

          // dynamically add accessible routes
          // router.addRoutes(accessRoutes);

          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true });
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch("user/resetToken");
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
      //
      if (whiteList.indexOf(to.path) !== -1) {
        // in the free login whitelist, go directly
        next();
      } else {
        // other pages that do not have permission to access are redirected to the login page.
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
          // get user info
          // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
          const { admin } = await store.dispatch("user/getInfo");
          console.log(admin);

          // generate accessible routes map based on roles
          // const accessRoutes = await store.dispatch(
          //   "permission/generateRoutes",
          //   admin
          // );

          // dynamically add accessible routes
          // router.addRoutes(accessRoutes);

          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true });
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch("user/resetToken");
          next();
        }
      }
    } else {
      next();
    }
  }
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
