import Cookies from "js-cookie";

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
  multipage: true
};

const mutations = {
  SET_DEVICE: (state, isMobile) => {
      state.isMobile = isMobile
  },
  SET_THEME: (state, theme) => {
    state.theme = theme
  },
  SET_LAYOUT: (state, layout) => {
    state.layout = layout
  },
  SET_MULTIPAGE: (state, multipage) => {
    state.multipage = multipage
  },
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened;
    state.sidebar.withoutAnimation = false;
    if (state.sidebar.opened) {
      Cookies.set("sidebarStatus", 1);
    } else {
      Cookies.set("sidebarStatus", 0);
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set("sidebarStatus", 0);
    state.sidebar.opened = false;
    state.sidebar.withoutAnimation = withoutAnimation;
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device;
  },
  SET_SIZE: (state, size) => {
    state.size = size;
    Cookies.set("size", size);
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
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
