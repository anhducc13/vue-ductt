import { login, logout, getInfo } from "@/api/user";
import { getToken, setToken, removeToken } from "@/utils/auth";
import router from "@/router";

// import router, { resetRouter } from "@/router";

const state = {
  token: getToken(),
  name: "",
  avatar: "",
  introduction: "",
  admin: null
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
  SET_ADMIN: (state, isAdmin) => {
    state.admin = isAdmin;
  }
};

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username_or_email, password, loginAdmin } = userInfo;
    return new Promise((resolve, reject) => {
      login({ username_or_email, password })
        .then(response => {
          console.log(response);
          const { user, token } = response;
          // const { admin } = data;
          if (loginAdmin) {
            if (user.is_admin) {
              commit("SET_ADMIN", true);
            } else {
              router.push("/403");
              return;
            }
          } else {
            commit("SET_ADMIN", false);
          }
          commit("SET_TOKEN", token);
          commit("SET_NAME", user.username);
          commit("SET_AVATAR", user.avatar);
          setToken(token);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token)
        .then(response => {
          const { data } = response;

          if (!data) {
            reject("Verification failed, please Login again.");
          }

          const { admin, name, avatar, introduction } = data;

          // roles must be a non-empty array
          if (![true, false].includes(admin)) {
            reject("getInfo: roles admin must be true or false!");
          }

          commit("SET_NAME", name);
          commit("SET_AVATAR", avatar);
          commit("SET_INTRODUCTION", introduction);
          commit("SET_ADMIN", admin);
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token)
        .then(() => {
          commit("SET_TOKEN", "");
          removeToken();
          // resetRouter();

          // reset visited views and cached views
          // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
          // dispatch("tagsView/delAllViews", null, { root: true });

          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit("SET_TOKEN", "");
      removeToken();
      resolve();
    });
  },

  // dynamically modify permissions
  changeRoles({ commit }, role) {
    return new Promise(async resolve => {
      const token = role + "-token";

      commit("SET_TOKEN", token);
      setToken(token);

      // const { roles } = await dispatch("getInfo");

      // resetRouter();

      // generate accessible routes map based on roles
      // const accessRoutes = await dispatch("permission/generateRoutes", roles, {
      // root: true
      // });

      // dynamically add accessible routes
      // router.addRoutes(accessRoutes);

      // reset visited views and cached views
      // dispatch("tagsView/delAllViews", null, { root: true });

      resolve();
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
