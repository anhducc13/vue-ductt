import request from "@/utils/request";

export function fetchPublishersList(params) {
  // return new Promise(res => {
  //   res({
  //     result: {
  //       total_items: 2,
  //       results: [
  //         {
  //           id: 1,
  //           name: "NXB Văn Học",
  //           rate: 3,
  //           display_url: "nxb-van-hoc"
  //         },
  //         {
  //           id: 2,
  //           name: "NXB Giáo Dục",
  //           rate: 4,
  //           display_url: "nxb-giao-duc"
  //         }
  //       ]
  //     }
  //   });
  // });
   return request({
     url: "/publishers",
     method: "get",
     params: params
   });
}
export function fetchPublisher(id) {
  // console.log(id);
  // return new Promise(res => {
  //   res({
  //     result: {
  //       id: 2,
  //       name: "NXB Giáo Dục",
  //       display_url: "nxb-giao-duc",
  //       rate: 5,
  //       description: ""
  //     }
  //   });
  // });
  return request({
    url: `/publishers/${id}`,
    method: "get"
  });
}

export const addPublisher = body => {
  return request({
    url: "/publishers",
    method: "post",
    data: body
  });
};

export const editPublisher = (id, body) => {
  return request({
    url: `/publishers/${id}`,
    method: "put",
    data: body
  });
};

export const deletePublisher = id => {
  return request({
    url: `/publishers/${id}`,
    method: "delete"
  });
};
