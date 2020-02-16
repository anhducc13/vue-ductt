const state = {
  updatingCart: false,
  openModalCart: false,
  products_of_cart: [],
  sub_total: 0,
};

const actions = {
  getCart({ commit }, data) {
    commit("getCartSuccess", data);
  },
  getCartAfterOrder({ commit }) {
    commit("getCartAfterOrder");
  },
  setModalCart({ commit }, data) {
    commit("setOpenModal", data);
  },
  setUpdatingCart({ commit }, data) {
    commit("setUpdatingCart", data);
  }
};

const mutations = {
  getCartSuccess(state, cart) {
    state.products_of_cart = cart.products;
    state.sub_total = cart.sub_total;
  },
  getCartAfterOrder(state) {
    state.products_of_cart = [];
    state.sub_total = 0;
  },
  setOpenModal(state, isOpen) {
    state.openModalCart = isOpen;
  },
  setUpdatingCart(state, updating) {
    state.updatingCart = updating;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
