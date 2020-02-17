import { normalService } from "@/utils/request";
// import { generateListBook } from "@/utils/fakeBook";

const getSaleCategory = (slug, params) => {
  return normalService
    .get(`/marketproduct/saleCategory/${slug}`, { params })
    .then(res => res.data.data);
}

export default {
  getSaleCategory,
}