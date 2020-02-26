import Cookies from "js-cookie";
// import {generateBook} from "../../utils/fakeBook";

const state = {
  isMobile: false,
  theme: "dark",
  layout: "side",
  systemName: "Vue Antd Admin",
  copyright: "2019-2020",
  footerLinks: [
    { link: "https://www.facebook.com/ductt.97", name: "Duc Tran" },
    { link: "https://github.com/anhducc13", icon: "github" },
    { link: "https://ant.design", name: "Ant Design" }
  ],
  multipage: true,
  loading: false,
  collapsed: Cookies.get("sidebarStatus") === "1",
  currentBook: null
};

const mutations = {
  SET_DEVICE: (state, isMobile) => {
    state.isMobile = isMobile;
  },
  SET_THEME: (state, theme) => {
    state.theme = theme;
  },
  SET_LAYOUT: (state, layout) => {
    state.layout = layout;
  },
  SET_MULTIPAGE: (state, multipage) => {
    state.multipage = multipage;
  },
  TOGGLE_SIDEBAR: (state, collapsed) => {
    state.collapsed = collapsed;
    if (state.collapsed) {
      Cookies.set("sidebarStatus", 1);
    } else {
      Cookies.set("sidebarStatus", 0);
    }
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device;
  },
  SET_SIZE: (state, size) => {
    state.size = size;
    Cookies.set("size", size);
  },
  SET_LOADING: (state, newLoading) => {
    state.loading = newLoading;
  },
  SET_CURRENT_BOOK: (state, book) => {
    state.currentBook = book;
  }
};

const actions = {
  setDevice({ commit }, isMobile) {
    commit("SET_DEVICE", isMobile);
  },
  setTheme({ commit }, theme) {
    commit("SET_THEME", theme);
  },
  setLayout({ commit }, layout) {
    commit("SET_LAYOUT", layout);
  },
  setMultiPage({ commit }, multipage) {
    commit("SET_MULTIPAGE", multipage);
  },
  setLoading({ commit }, loading) {
    commit("SET_LOADING", loading);
  },
  setCollapsed({ commit }, collapsed) {
    commit("TOGGLE_SIDEBAR", collapsed);
  },
  setCurrentBook({commit}, book){
    commit("SET_CURRENT_BOOK", book);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
