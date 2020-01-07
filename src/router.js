import Vue from "vue";
import Router from "vue-router"
import NProgress from 'nprogress'
import "nprogress/nprogress.css"

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      meta: { layout: "default" },
      component: () => import("@/pages/user/Home.vue") // load sync home
    },
    {
      path: "/admin",
      name: "admin-home",
      meta: { layout: "admin" },
      component: () => import("@/pages/admin/Home.vue")
    },
    {
      path: "/403",
      name: "403",
      component: () => import("@/pages/shared/403.vue")
    },
    {
      path: "/500",
      name: "500",
      component: () => import("@/pages/shared/500.vue")
    },
    {
      path: "/404",
      name: "404",
      component: () => import("@/pages/shared/404.vue")
    },
    {
      path: "*",
      redirect: "/404",
      name: "404*",
      component: () => import("@/pages/shared/404.vue")
    }
  ]
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
