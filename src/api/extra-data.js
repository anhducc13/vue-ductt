// import request from "@/utils/request";

export function fetchExtraData() {
  return new Promise(res => {
    res({
      result: {
        categories: [
          {
            id: 1,
            is_parent: true,
            parent_id: null,
            is_active: true,
            name: "Văn học",
            short_name: "Văn học"
          },
          {
            id: 2,
            is_parent: false,
            parent_id: 1,
            is_active: true,
            name: "Văn học VN",
            short_name: "Văn học VN"
          }
        ]
      }
    });
  });
  // return request({
  //   url: "/user/login",
  //   method: "post",
  //   data
  // });
}
