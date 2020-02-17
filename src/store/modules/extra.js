import { fetchExtraData } from "@/api/extra-data";
import { fetchCategoriesMenu } from "@/api/home/extra";
import { buildCategoriesTree2Level } from "@/utils/common";

const state = {
  extraData: {
    categories: [],
    publishers: [],
    authors: [],
  },
  categoriesMenu: [],
};

const mutations = {
  SET_EXTRA_DATA: (state, extraData) => {
    state.extraData = extraData;
  },
  SET_CATEGORIES_MENU: (state, categories) => {
    state.categoriesMenu = categories;
  }
};

const actions = {
  fetchExtraData({ commit }) {
    return new Promise((resolve, reject) => {
      fetchExtraData()
        .then(response => {
          const { data: { results } } = response;
          if (results) {
            commit("SET_EXTRA_DATA", results);
            resolve();
          } else {
            reject();
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  fetchCategoriesMenu({ commit }) {
    return new Promise((resolve, reject) => {
      fetchCategoriesMenu()
        .then(response => {
          const { data: { results } } = response;
          if (results) {
            commit("SET_CATEGORIES_MENU", buildCategoriesTree2Level(results));
            resolve();
          } else {
            reject();
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
