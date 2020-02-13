import request from "@/utils/request";

export function fetchCategoriesList(params) {
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
