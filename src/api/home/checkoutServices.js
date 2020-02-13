import { MyCart } from "@/cart.js";

export const getCart = () => {
  return {
    data: MyCart.getCart()
  };
}

export const addToCart = (product, qty) => {
  MyCart.addToCart(product, qty);
}