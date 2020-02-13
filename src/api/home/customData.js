// import { normalService } from "@/utils/request";
import { generateListBook, gennerateListBanner } from "@/utils/fakeBook";

// const MOCK_API = process.env.MOCK_API;
const CODE = {
  BOOK_NEW: "book_new",
  BOOK_BEST_SELLER: "book_best_seller",
  BOOK_FORTHCOMING: "book_forthcoming",
  BANNER: "banner"
};

export const getCustomData = ({ code }) => {
  return code === CODE.BANNER ? gennerateListBanner() : generateListBook();
};
