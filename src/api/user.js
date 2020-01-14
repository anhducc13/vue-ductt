// import request from "@/utils/request";

export function login(data) {
  console.log(data)
  return new Promise((res) => {
    res({
      data: {
        token: "ductt",
        admin: true,
        name: "Ductt",
        avatar:
          "https://iczer.gitee.io/vue-antd-pro/static/img/vue-antd-logo.png"
      }
    });
  });
  // return request({
  //   url: "/user/login",
  //   method: "post",
  //   data
  // });
}

export function getInfo(token) {
  console.log(token);
  return new Promise(res => {
    res({
      data: {
        token: "ductt",
        admin: true,
        name: "Ductt",
        avatar:
          "https://iczer.gitee.io/vue-antd-pro/static/img/vue-antd-logo.png",
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
