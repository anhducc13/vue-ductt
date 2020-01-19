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
        ],
        publishers: [
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
        ],
        authors: [
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
