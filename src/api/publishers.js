// import request from "@/utils/request";

export function fetchPublishersList() {
  return new Promise(res => {
    res({
      result: {
        total_items: 2,
        results: [
          {
            id: 1,
            name: "NXB Văn Học",
            rate: 3,
            display_url: "nxb-van-hoc"
          },
          {
            id: 2,
            name: "NXB Giáo Dục",
            rate: 4,
            display_url: "nxb-giao-duc"
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
export function fetchPublisher(id) {
  console.log(id);
  return new Promise(res => {
    res({
      result: {
        id: 2,
        name: "NXB Giáo Dục",
        display_url: "nxb-giao-duc",
        rate: 5,
        description: ""
      }
    });
  });
  // return request({
  //   url: "/user/login",
  //   method: "post",
  //   data
  // });
}
