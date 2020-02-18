import { mapActions, mapState } from "vuex";
import { getCart as getMyCart, addToCart as addProdToCart, removeFromCart, updateCart } from "@/api/home/checkoutServices";

export default {
  computed: {
    ...mapState("cart", ["openModalCart", "products_of_cart", "sub_total"]),
  },
  methods: {
    ...mapActions("cart", ["getCart", "setModalCart"]),
    removeItemFromCart(id) {
      removeFromCart(id);
      this.reloadCart();
    },
    addToCart(product, qty = 1) {
      addProdToCart(product, qty);
      this.reloadCart()
    },
    changeQtyCart(product) {
      const newCartProds = this.products_of_cart.map(x => {
        if (x.id === product.id) {
          return {
            ...x,
            qty: product.qty
          };
        }
        return x;
      });
      updateCart({ products: newCartProds });
      this.reloadCart();
    },
    reloadCart() {
      this.getCart(getMyCart().data);
      if (this.products_of_cart.length === 0) {
        this.setModalCart(false);
      }
    }
  },
};
