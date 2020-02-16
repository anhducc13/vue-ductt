// import { normalService } from "@/utils/request";
import { generateListBook } from "@/utils/fakeBook";

const getSaleCategory = (params) => {
  return generateListBook(20);
}

export default {
  getSaleCategory,
}