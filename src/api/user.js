import request from "@/utils/request";
import { removeToken } from "@/utils/auth";

export function login(params) {
  return request
    .post("/auth/login", params)
    .then(res => res.data)
}

export function getInfo() {
  return request
    .get("/auth/getInfo")
    .then(res => res.data);
}

export function logout() {
  removeToken()
  return new Promise(res => {
    res("ok");
  });
  // return request({
  //   url: "/user/logout",
  //   method: "post"
  // });
}
