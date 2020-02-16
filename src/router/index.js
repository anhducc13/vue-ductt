import Vue from "vue";
import Router from "vue-router";
import userRouter from './userRouter';
import adminRouter from "./adminRouter";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    ...userRouter,
    ...adminRouter,
    {
      path: "/admin/login",
      component: () => import("@/pages/admin/Login")
    },
    {
      path: "/403",
      component: () => import("@/pages/shared/403.vue")
    },
    {
      path: "/500",
      component: () => import("@/pages/shared/500.vue")
    },
    {
      path: "/404",
      component: () => import("@/pages/shared/404.vue")
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
