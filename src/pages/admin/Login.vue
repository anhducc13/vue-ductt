<template>
  <div class="login-container">
    <div class="content">
      <div class="top">
        <div class="header">
          <img
            alt="logo"
            class="logo"
            src="https://iczer.gitee.io/vue-antd-pro/static/img/vue-antd-logo.png"
          />
          <span class="title">{{"DUCTT"}}</span>
        </div>
        <div class="desc">Đăng nhập hệ thống quản lý</div>
      </div>
      <div class="login">
        <validation-observer v-slot="{ handleSubmit }">
          <a-form @submit.prevent="handleSubmit(onSubmit)">
            <a-tabs size="large" :tabBarStyle="{textAlign: 'center'}" style="padding: 0 2px;">
              <a-tab-pane tab="Sử dụng TK-MK" key="1">
                <validation-provider
                  name="Tên đăng nhập"
                  rules="required|minLength:6"
                  v-slot="{ errors }"
                >
                  <a-form-item :help="errors[0]" :validate-status="errors[0] ? 'error': ''">
                    <a-input
                      ref="username"
                      size="large"
                      placeholder="Nhập tên đăng nhập"
                      v-model="formData.username"
                    >
                      <a-icon slot="prefix" type="user" />
                    </a-input>
                  </a-form-item>
                </validation-provider>
                <validation-provider
                  name="Mật khẩu"
                  rules="required|minLength:8"
                  v-slot="{ errors }"
                >
                  <a-form-item :help="errors[0]" :validate-status="errors[0] ? 'error': ''">
                    <a-input
                      type="password"
                      ref="password"
                      size="large"
                      placeholder="Nhập mật khẩu"
                      v-model="formData.password"
                    >
                      <a-icon slot="prefix" type="lock" />
                    </a-input>
                  </a-form-item>
                </validation-provider>
              </a-tab-pane>
              <a-tab-pane tab="Sử dụng SĐT" key="2">
                <a-form-item>
                  <a-input size="large" placeholder="Nhập số điện thoại">
                    <a-icon slot="prefix" type="mobile" />
                  </a-input>
                </a-form-item>
                <a-form-item>
                  <a-row :gutter="8" style="margin: 0 -4px">
                    <a-col :span="16">
                      <a-input size="large" placeholder="Nhập mã capcha">
                        <a-icon slot="prefix" type="mail" />
                      </a-input>
                    </a-col>
                    <a-col :span="8" style="padding-left: 4px">
                      <a-button style="width: 100%" class="captcha-button" size="large">Nhận mã</a-button>
                    </a-col>
                  </a-row>
                </a-form-item>
              </a-tab-pane>
            </a-tabs>
            <div>
              <a-checkbox v-model="formData.rememberMe">Nhớ tôi</a-checkbox>
              <router-link style="float: right" to="/dashboard/workplace">Quên mật khẩu?</router-link>
            </div>
            <a-form-item>
              <a-button
                :loading="loading"
                style="width: 100%;margin-top: 24px"
                size="large"
                htmlType="submit"
                type="primary"
              >Đăng nhập</a-button>
            </a-form-item>
            <div>
              Phương thức khác
              <a-icon class="icon" type="google" />
              <a-icon class="icon" type="facebook" />
              <a-icon class="icon" type="github" />
              <router-link style="float: right" to="/dashboard/workplace">Đăng ký</router-link>
            </div>
          </a-form>
        </validation-observer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
  data() {
    return {
      formData: {
        username: "",
        password: "",
        rememberMe: true
      },
      loading: false
    };
  },
  mounted() {
    console.log(this.$router);
    if (this.formData.username.trim() === "") {
      this.$refs.username.focus();
    } else if (this.formData.password.trim() === "") {
      this.$refs.password.focus();
    }
  },
  methods: {
    onSubmit() {
      this.loading = true;
      this.$store
        .dispatch("user/login", { ...this.formData, loginAdmin: true })
        .then(() => {
          const { redirect } = this.$router.currentRoute.query;
          if (redirect) {
            this.$router.push({ path: redirect });
          } else {
            this.$router.push({ path: "/admin" });
          }
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    }
  }
};
</script>

<style lang="less" scoped>
.login-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  background: #f0f2f5
    url("https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg")
    no-repeat center 110px;
  background-size: 100%;
  .content {
    padding: 32px 0;
    flex: 1;
    @media (min-width: 768px) {
      padding: 112px 0 24px;
    }
    .top {
      text-align: center;
      .header {
        height: 44px;
        line-height: 44px;
        a {
          text-decoration: none;
        }
        .logo {
          height: 44px;
          vertical-align: top;
          margin-right: 16px;
        }
        .title {
          font-size: 33px;
          color: rgba(0, 0, 0, 0.85);
          font-family: "Myriad Pro", "Helvetica Neue", Arial, Helvetica,
            sans-serif;
          font-weight: 600;
          position: relative;
          top: 2px;
        }
      }
      .desc {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.45);
        margin-top: 12px;
        margin-bottom: 40px;
      }
    }
    .login {
      width: 368px;
      margin: 0 auto;
      @media screen and (max-width: 576px) {
        width: 95%;
      }
      @media screen and (max-width: 320px) {
        .captcha-button {
          font-size: 14px;
        }
      }
      .icon {
        font-size: 24px;
        color: rgba(0, 0, 0, 0.2);
        margin-left: 16px;
        vertical-align: middle;
        cursor: pointer;
        transition: color 0.3s;
        &:hover {
          color: #1890ff;
        }
      }
    }
  }
}
</style>