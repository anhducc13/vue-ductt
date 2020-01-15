import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      meta: { layout: "default" },
      component: () => import("@/pages/user/Home.vue") // load sync home
    },
    {
      path: "/admin",
      meta: { layout: "admin" },
      component: () => import("@/pages/admin/Home.vue")
    },
    {
      path: "/admin/users/all",
      meta: { layout: "admin" },
      component: () => import("@/components/shared/Tinymce/index")
    },
    {
      path: "/admin/users/add",
      meta: { layout: "admin" },
      component: () => import("@/components/shared/Tinymce/index")
    },
    {
      path: "/admin/categories/list",
      meta: { layout: "admin" },
      component: () => import("@/pages/admin/categories/CategoriesList")
    },
    {
      path: "/admin/categories/new",
      meta: { layout: "admin" },
      component: () => import("@/pages/admin/categories/CategoryNew")
    },
    {
      path: "/admin/categories/:id/edit",
      meta: { layout: "admin" },
      component: () => import("@/pages/admin/categories/CategoryNew")
    },
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
    },
    {
      path: "*",
      redirect: "/404",
      component: () => import("@/pages/shared/404.vue")
    }
  ]
});

export default router;
