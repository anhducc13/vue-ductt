import { fetchExtraData } from "@/api/extra-data";

const state = {
  extraData: {
    categories: [],
    publishers: [],
    authors: [],
  }
};

const mutations = {
  SET_EXTRA_DATA: (state, extraData) => {
    state.extraData = extraData;
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
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
