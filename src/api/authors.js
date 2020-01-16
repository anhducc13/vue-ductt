// import request from "@/utils/request";

export function fetchAuthorsList() {
  return new Promise(res => {
    res({
      result: {
        total_items: 2,
        results: [
          {
            id: 1,
            name: "Nguyễn Nhật Ánh",
            rate: 5,
            display_url: "nguyen-nhat-anh"
          },
          {
            id: 2,
            name: "Nguyễn Hoàng Hải",
            rate: 3,
            display_url: "hoang-hai-nguyen"
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
export function fetchAuthor(id) {
  console.log(id)
  return new Promise(res => {
    res({
      result: {
        id: 1,
        name: "Nguyễn Nhật Ánh",
        display_url: "nguyen-nhat-anh",
        rate: 5,
        description: "Ductt"
      }
    });
  });
  // return request({
  //   url: "/user/login",
  //   method: "post",
  //   data
  // });
}
