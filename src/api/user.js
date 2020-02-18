import request from "@/utils/request";

export function login(params) {
  return request
    .post("/auth/login", params)
    .then(res => res.data)
}

export function getInfo(token) {
  return new Promise(res => {
    res({
      data: {
        token: "ductt",
        admin: true,
        name: "Ductt",
        avatar:
          "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
      }
    });
  });
  // return request({
  //   url: "/user/info",
  //   method: "get",
  //   params: { token }
  // });
}

export function logout() {
  return new Promise(res => {
    res("ok");
  });
  // return request({
  //   url: "/user/logout",
  //   method: "post"
  // });
}
