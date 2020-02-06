import request from "@/utils/request";

export function fetchCategoriesList(params) {
  // return new Promise(res => {
  //   res({
  //     result: {
  //       total_items: 2,
  //       results: [
  //         {
  //           id: 1,
  //           is_parent: true,
  //           parent: null,
  //           is_active: true,
  //           name: "Văn học",
  //           short_name: "Văn học",
  //           display_url: "van-hoc"
  //         },
  //         {
  //           id: 2,
  //           is_parent: false,
  //           parent: {
  //             id: 1,
  //             is_parent: true,
  //             parent: null,
  //             is_active: true,
  //             name: "Văn học",
  //             short_name: "Văn học",
  //             display_url: "van-hoc"
  //           },
  //           is_active: true,
  //           name: "Văn học VN",
  //           short_name: "Văn học VN",
  //           display_url: "van-hoc-vn"
  //         }
  //       ]
  //     }
  //   });
  // });
  return request({
    url: "/categories",
    method: "get",
    params: params
  });
}

export function fetchCategory(id) {
  return request({
    url: `/categories/${id}`,
    method: "get"
  });
}

export const addCategory = body => {
  return request({
    url: "/categories",
    method: "post",
    data: body
  });
};

export const editCategory = (id, body) => {
  return request({
    url: `/categories/${id}`,
    method: "put",
    data: body
  });
};