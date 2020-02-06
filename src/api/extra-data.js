import request from "@/utils/request";

export function fetchExtraData() {
  return request({
    url: "/extra",
    method: "get"
  });
}
