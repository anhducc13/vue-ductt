export default [
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
    path: "/admin/authors",
    meta: { layout: "admin" },
    component: () => import("@/pages/admin/authors/AuthorsList")
  },
  {
    path: "/admin/publishers",
    meta: { layout: "admin" },
    component: () => import("@/pages/admin/publishers/PublishersList")
  },
  {
    path: "/admin/books/new",
    meta: { layout: "admin" },
    component: () => import("@/pages/admin/books/BookNew")
  },
  {
    path: "/admin/books/list",
    meta: { layout: "admin" },
    component: () => import("@/pages/admin/books/BooksList")
  },
  {
    path: "/admin/books/:id/edit",
    meta: { layout: "admin" },
    component: () => import("@/pages/admin/books/BookNew")
  },
  {
    path: "/admin/login",
    component: () => import("@/pages/admin/Login")
  }
];