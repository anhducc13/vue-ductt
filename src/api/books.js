import request from "@/utils/request";

export function fetchBooksList(params) {
  return request({
    url: "/books",
    method: "get",
    params: params
  });
}

export function fetchBook(id) {
  return request({
    url: `/books/${id}`,
    method: "get"
  });
}

export const addBook = body => {
  return request({
    url: "/books",
    method: "post",
    data: body
  });
};

export const editBook = (id, body) => {
  return request({
    url: `/books/${id}`,
    method: "put",
    data: body
  });
};
