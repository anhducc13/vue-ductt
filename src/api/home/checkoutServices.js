import { MyCart } from "@/cart.js";

export const getCart = () => {
  return {
    data: MyCart.getCart()
  };
}

export const addToCart = (product, qty) => {
  MyCart.addToCart(product, qty);
}

export const updateCart = (newCart) => {
  MyCart.updateCart(newCart);
};

export const removeFromCart = id => {
  MyCart.removeFromCart(id);
};