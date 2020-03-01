export default [
  {
    path: "/",
    meta: { layout: "default", title: "Trang chủ" },
    component: () => import("@/pages/user/Home")
  },
  {
    path: "/tin-tuc",
    meta: { layout: "default", title: "Tin tức" },
    component: () => import("@/pages/user/News")
  },
  {
    path: "/khoa-hoc",
    meta: { layout: "default", title: "Khóa học" },
    component: () => import("@/pages/user/Courses")
  },
  {
    path: "/danh-muc/:slug",
    meta: { layout: "default", title: "Danh mục" },
    component: () => import("@/pages/user/Category")
  },
  {
    path: "/san-pham/:slug",
    meta: { layout: "default", title: "Sản phẩm" },
    component: () => import("@/pages/user/ProductDetail")
  },
  {
    path: "/san-pham/:slug/preview",
    component: () => import("@/components/user/ProductPreview")
  },
  {
    path: "/gio-hang",
    meta: { layout: "default", title: "Giỏ hàng" },
    component: () => import("@/pages/user/Cart")
  },
  {
    path: "/thanh-toan",
    meta: { title: "Thanh toán" },
    component: () => import("@/pages/user/Checkout")
  },
  {
    path: "*",
    meta: { layout: "default", title: "404 Không tìm thấy trang" },
    component: () => import("@/pages/user/_404")
  }
];
