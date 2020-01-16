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
            display_url: "nxb-van-hoc"
          },
          {
            id: 2,
            name: "NXB Giáo Dục",
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
