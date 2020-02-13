import { MyCart } from "@/cart.js";

export const getCart = () => {
  return {
    data: MyCart.getCart()
  };
}