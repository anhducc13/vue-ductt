export default [
  {
    path: "/",
    meta: { layout: "default", title: "Trang chủ" },
    component: () => import("@/pages/user/Home") // load sync home
  },
  {
    path: "/tin-tuc",
    meta: { layout: "default", title: "Tin tức" },
    component: () => import("@/pages/user/News") // load sync home
  },
  {
    path: "/khoa-hoc",
    meta: { layout: "default", title: "Khóa học" },
    component: () => import("@/pages/user/Courses") // load sync home
  },
  {
    path: "/danh-muc/:slug",
    meta: { layout: "default", title: "Danh mục" },
    component: () => import("@/pages/user/Category") // load sync home
  },
  {
    path: "/san-pham/:slug",
    meta: { layout: "default", title: "Sản phẩm" },
    component: () => import("@/pages/user/ProductDetail") // load sync home
  },
  {
    path: "*",
    meta: { layout: "default", title: "404 Không tìm thấy trang" },
    component: () => import("@/pages/user/_404") // load sync home
  }
];
