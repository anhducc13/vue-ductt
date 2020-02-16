const CART_KEY = "my-cart";

class Cart {
  constructor() {
    this.globalCart = JSON.parse(localStorage.getItem(CART_KEY));
  }
  getCart() {
    if (
      localStorage.getItem(CART_KEY) == null ||
      localStorage.getItem(CART_KEY) == ""
    ) {
      let newCart = {
        products: [],
        sub_total: 0,
      };
      localStorage.setItem(CART_KEY, JSON.stringify(newCart));
    }
    let currentCart = JSON.parse(localStorage.getItem(CART_KEY));
    this.globalCart = currentCart;
    return currentCart;
  }

  addToCart(product, qty) {
    let currentCart = this.globalCart;
    let isProductInCart = false;
    if (!currentCart.products || typeof currentCart.products == "undefined") {
      currentCart.products = [];
    }
    currentCart.products = currentCart.products.map(item => {
      if (item.id === product.id) {
        isProductInCart = true;
        return {
          ...item,
          qty: item.qty += qty,
          total_price: item.total_price += parseInt(product.sale_price * qty),
        }
      }
      return item;
    })
    if (!isProductInCart) {
      currentCart.products.push({
        ...product,
        qty,
        total_price: parseInt(product.sale_price * qty)
      });
    }
    this.updateCart(currentCart);
  }

  removeFromCart(productId) {
    let myCart = this.globalCart;
    for (let i = 0; i < myCart.products.length; i++) {
      if (myCart.products[i].id == productId) {
        myCart.products.splice(i, 1);
        break;
      }
    }
    if (myCart.products.length == 0) {
      this.clearCart(false);
    } else {
      this.updateCart(myCart);
    }
  }

  clearCart() {
    localStorage.setItem(CART_KEY, "");
    this.getCart();
    this.updateCart(this.globalCart);
  }

  changeqty(productId, qty) {
    let myCart = this.globalCart;
    for (let i = 0; i < myCart.products.length; i++) {
      if (myCart.products[i].product_id == productId) {
        if (myCart.products[i].qty == 1 && qty < 0) return false;
        myCart.products[i].qty += qty;
        break;
      }
    }
    this.updateCart(myCart);
  }

  getSubTotal() {
    const myCart = this.globalCart;
    if (myCart.products.length === 0) {
      return 0;
    } else {
      return myCart.products.reduce((pre, curr) => {
        return curr + pre.qty * pre.sale_price;
      }, 0);
    }
  }

  updateCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    let currentCart = JSON.parse(localStorage.getItem(CART_KEY));
    if (!currentCart.products || typeof currentCart.products == "undefined") {
      currentCart.products = [];
    }
    currentCart.sub_total = 0;
    for (let i = 0; i < currentCart.products.length; i++) {
      if (
        currentCart.products[i].qty <= 0 ||
        Number.isNaN(currentCart.products[i].qty)
      ) {
        currentCart.products[i].qty = 1;
      }
      if (currentCart.products[i].qty >= 99) {
        currentCart.products[i].qty = 99;
      }
      currentCart.products[i].total_price =
        currentCart.products[i].sale_price * currentCart.products[i].qty;
      currentCart.sub_total += currentCart.products[i].total_price;
    }
    localStorage.setItem(CART_KEY, JSON.stringify(currentCart));
    this.globalCart = currentCart;
  }

  getPaymentData() {
    return {
      sub_total: this.getSubTotal(),
    };
  }

  getProduct(sku) {
    if (!this.globalCart) {
      this.getCart();
    }
    let currentCart = this.globalCart;
    if (!currentCart.products || typeof currentCart.products == "undefined") {
      currentCart.products = [];
    }
    return currentCart.products.find(p => p.sku === sku);
  }
}

export const MyCart = new Cart();
