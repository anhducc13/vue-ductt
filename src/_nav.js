export const nav = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: "dashboard"
  },
  {
    name: "Quản lý member",
    icon: "user",
    path: "/admin/users",
    children: [
      {
        path: "/admin/users/all",
        name: "Danh sách user",
        icon: "ordered-list"
      },
      {
        path: "/admin/users/add",
        name: "Thêm mới user",
        icon: "plus"
      }
    ]
  },
  {
    name: "Quản lý sách",
    icon: "read",
    path: "/admin/books",
    children: [
      {
        path: "/admin/books/list",
        name: "Danh sách sách",
        icon: "ordered-list"
      },
      {
        path: "/admin/books/new",
        name: "Thêm mới sách",
        icon: "plus"
      }
    ]
  },
  {
    name: "Quản lý danh mục",
    icon: "book",
    path: "/admin/categories",
    children: [
      {
        path: "/admin/categories/list",
        name: "Danh sách danh mục",
        icon: "ordered-list"
      },
      {
        path: "/admin/categories/new",
        name: "Thêm mới danh mục",
        icon: "plus"
      }
    ]
  },
  {
    name: "Quản lý đơn hàng",
    icon: "shopping",
    path: "/admin/orders/list"
  },
  // {
  //   name: "Quản lý NXB",
  //   icon: "printer",
  //   path: "/admin/publishers"
  // }
];
