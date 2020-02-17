import { normalService } from "@/utils/request";

export function fetchCategoriesMenu() {
  return normalService
    .get("/marketproduct/getExtraData", { params: { code: "categories" } })
    .then(res => res.data);
}
