import request from "@/utils/request";

export function fetchAuthorsList(params) {
  // return new Promise(res => {
  //   res({
  //     result: {
  //       total_items: 2,
  //       results: [
  //         {
  //           id: 1,
  //           name: "Nguyễn Nhật Ánh",
  //           rate: 5,
  //           display_url: "nguyen-nhat-anh"
  //         },
  //         {
  //           id: 2,
  //           name: "Nguyễn Hoàng Hải",
  //           rate: 3,
  //           display_url: "hoang-hai-nguyen"
  //         }
  //       ]
  //     }
  //   });
  // });
  return request({
    url: "/authors",
    method: "get",
    params: params,
  });
}
export function fetchAuthor(id) {
  // return new Promise(res => {
  //   res({
  //     result: {
  //       id: 1,
  //       name: "Nguyễn Nhật Ánh",
  //       display_url: "nguyen-nhat-anh",
  //       rate: 5,
  //       description: "Ductt"
  //     }
  //   });
  // });
  return request({
    url: `/authors/${id}`,
    method: "get",
  });
}

export const addAuthor = (body) => {
  return request({
    url: "/authors",
    method: "post",
    data: body,
  })
};

export const editAuthor = (id, body) => {
  return request({
    url: `/authors/${id}`,
    method: "put",
    data: body,
  })
}

export const deleteAuthor = (id) => {
  return request({
    url: `/authors/${id}`,
    method: "delete"
  });
}