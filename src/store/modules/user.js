import { login, getInfo } from "@/api/user";
import { setToken, removeToken } from "@/utils/auth";
import router from "@/router";

// import router, { resetRouter } from "@/router";

const state = {
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
          const { user, token } = response;
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
  getInfo({ commit }) {
    return new Promise((resolve, reject) => {
      getInfo()
        .then(response => {
          const { user } = response;

          if (!user) {
            reject("Verification failed, please Login again.");
          }

          const { is_admin, username, avatar } = user;

          // roles must be a non-empty array
          if (![true, false].includes(is_admin)) {
            reject("getInfo: roles admin must be true or false!");
          }
          commit("SET_NAME", username);
          commit("SET_AVATAR", avatar);
          commit("SET_ADMIN", is_admin);
          resolve(user);
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
