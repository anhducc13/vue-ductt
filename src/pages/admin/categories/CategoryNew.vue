<template>
  <a-row>
    <a-col :md="{ span: 16, offset: 4 }">
      <a-spin :spinning="loading">
        <a-card>
          <div class="d-flex justify-content-between" slot="title">
            <h4 v-if="isEditCategory">Chỉnh sửa danh mục</h4>
            <h4 v-else>Thêm mới danh mục</h4>
            <a-button
              type="primary"
              @click="
              () => {
                $router.push({ path: '/admin/categories/list' });
              }
            "
            >
              <a-icon type="left" />Về danh sách
            </a-button>
          </div>
          <div>
            <validation-observer v-slot="{ handleSubmit }">
              <a-form @submit.prevent="handleSubmit(saveCategory)">
                <a-form-item>
                  <span slot="label">
                    Danh mục cha&nbsp;
                    <a-tooltip
                      title="Danh mục có 2 cấp. Nếu bỏ trống, đây sẽ là danh mục cấp cao nhất"
                    >
                      <a-icon type="question-circle-o" />
                    </a-tooltip>
                  </span>
                  <a-select
                    showSearch
                    placeholder="Chọn danh mục cha"
                    optionFilterProp="children"
                    style="width: 100%"
                    v-model="formData.parent_id"
                    :filterOption="filterOption"
                  >
                    <a-select-option v-for="c in categories" :key="c.id">{{c.short_name}}</a-select-option>
                  </a-select>
                </a-form-item>
                <validation-provider
                  name="Tên ngắn gọn"
                  rules="required|minLength:8"
                  v-slot="{ errors }"
                >
                  <a-form-item
                    required
                    :help="errors[0]"
                    :validate-status="errors[0] ? 'error' : ''"
                  >
                    <span slot="label">
                      Tên ngắn gọn&nbsp;
                      <a-tooltip title="Tên hiển thị trên menu danh mục">
                        <a-icon type="question-circle-o" />
                      </a-tooltip>
                    </span>
                    <a-input
                      :maxLength="255"
                      placeholder="Nhập tên ngắn gọn"
                      v-model="formData.short_name"
                    />
                  </a-form-item>
                </validation-provider>
                <validation-provider
                  name="Tên danh mục"
                  rules="required|minLength:8"
                  v-slot="{ errors }"
                >
                  <a-form-item
                    required
                    :help="errors[0]"
                    :validate-status="errors[0] ? 'error' : ''"
                  >
                    <span slot="label">
                      Tên đầy đủ&nbsp;
                      <a-tooltip title="Tên đầy đủ của danh mục">
                        <a-icon type="question-circle-o" />
                      </a-tooltip>
                    </span>
                    <a-input placeholder="Nhập tên" v-model="formData.name" />
                  </a-form-item>
                </validation-provider>
                <a-form-item label="Trạng thái">
                  <a-switch v-model="formData.is_active" />
                </a-form-item>
                <a-form-item label="Mô tả danh mục">
                  <markdown-editor v-model="formData.description" />
                </a-form-item>

                <a-form-item>
                  <a-button :loading="loading" htmlType="submit" type="primary">Lưu danh mục</a-button>
                </a-form-item>
              </a-form>
            </validation-observer>
          </div>
        </a-card>
      </a-spin>
    </a-col>
  </a-row>
</template>
<script>
import { notification } from "ant-design-vue";
import MarkdownEditor from "@/components/shared/MarkdownEditor";
import { fetchCategory, editCategory, addCategory } from "@/api/categories";
import { cleanRequestBody } from "@/utils/common";
import { mapGetters } from "vuex";

const defaultFormdata = {
  parent_id: undefined,
  short_name: "",
  name: "",
  is_active: true,
  description: ""
};
export default {
  name: "CategoryNew",
  components: { MarkdownEditor },
  data() {
    return {
      formData: { ...defaultFormdata },
      loading: false
    };
  },
  mounted: function() {
    this.$store.dispatch("extra/fetchExtraData");
    if (this.isEditCategory) {
      this.fetchCat();
    }
  },
  computed: {
    ...mapGetters(["extraData"]),
    isEditCategory: function() {
      return !!this.$route.params.id;
    },
    categories() {
      const { categories } = this.extraData;
      if (Array.isArray(categories)) {
        return categories.filter(c => c.parent_id === null);
      }
      return [];
    }
  },
  methods: {
    async fetchCat() {
      this.loading = true;
      try {
        const id = this.$route.params.id;
        const { data } = await fetchCategory(id);
        this.formData = data;
      } catch {
        //
      } finally {
        this.loading = false;
      }
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    },
    async saveCategory() {
      this.loading = true;
      try {
        if (this.isEditCategory) {
          await editCategory(this.formData.id, cleanRequestBody(this.formData));
          notification.success({
            message: "Thành công",
            description: "Chỉnh sửa thành công"
          });
          this.$router.push({ path: "/admin/categories/list" });
        } else {
          const { data } = await addCategory(cleanRequestBody(this.formData));
          notification.success({
            message: "Thành công",
            description: `Thêm mới thành công danh mục ${data.short_name}`
          });
          this.$router.push({ path: "/admin/categories/list" });
        }
      } catch (err) {
        //
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>
<style scoped></style>
