<template>
  <a-row>
    <a-col :md="{ span: 16, offset: 4 }">
      <a-card>
        <div class="d-flex justify-content-between" slot="title">
          <h4>Thêm mới danh mục</h4>
          <a-button type="primary">
            <a-icon type="left" />
            Về danh sách
          </a-button>
        </div>
        <div>
          <validation-observer v-slot="{ handleSubmit }">
          <a-form
            @submit.prevent="handleSubmit(() => {})"
            :labelCol="{ lg: { span: 6 }, md: { span: 24 } }"
            :wrapperCol="{ lg: { span: 18 }, md: { span: 24 }}"
          >
            <validation-provider name="Mật khẩu" rules="required|minLength:8" v-slot="{ errors }">
              <a-form-item :help="errors[0]" :validate-status="errors[0] ? 'error': ''">
                <span slot="label">
                  Tên ngắn gọn&nbsp;
                  <a-tooltip title="Tên hiển thị trên menu danh mục">
                    <a-icon type="question-circle-o" />
                  </a-tooltip>
                </span>
                <a-input placeholder="Nhập tên ngắn gọn" v-model="formData.short_name" />
              </a-form-item>
            </validation-provider>
            <validation-provider name="Mật khẩu" rules="required|minLength:8" v-slot="{ errors }">
              <a-form-item :help="errors[0]" :validate-status="errors[0] ? 'error': ''">
                <span slot="label">
                  URL&nbsp;
                  <a-tooltip title="Tên hiển thị trên URL (VD: sach-van-hoc)">
                    <a-icon type="question-circle-o" />
                  </a-tooltip>
                </span>
                <a-input placeholder="Nhập URL" v-model="formData.display_url" />
              </a-form-item>
            </validation-provider>
            <validation-provider name="Mật khẩu" rules="required|minLength:8" v-slot="{ errors }">
              <a-form-item :help="errors[0]" :validate-status="errors[0] ? 'error': ''">
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
              <tinymce v-bind:value="formData.description" />
            </a-form-item>
            <a-form-item>
              <span slot="label">
                Danh mục cha&nbsp;
                <a-tooltip title="Danh mục có 2 cấp. Nếu bỏ trống, đây sẽ là danh mục cấp cao nhất">
                  <a-icon type="question-circle-o" />
                </a-tooltip>
              </span>
              <a-select
                showSearch
                placeholder="Chọn danh mục cha"
                optionFilterProp="children"
                style="width: 100%"
                @focus="handleFocus"
                @blur="handleBlur"
                @change="handleChange"
                :filterOption="filterOption"
              >
                <a-select-option value="jack">Jack</a-select-option>
                <a-select-option value="lucy">Lucy</a-select-option>
                <a-select-option value="tom">Tom</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item :wrapperCol="{ lg: { offset: 6, span: 18 }, md: { span: 24 }}">
              <a-button :loading="loading" htmlType="submit" type="primary">Lưu danh mục</a-button>
            </a-form-item>
          </a-form>
        </validation-observer>
        </div>
      </a-card>
    </a-col>
  </a-row>
</template>
<script>
import Tinymce from '@/components/shared/Tinymce'
export default {
  name: 'CategoryNew',
  components: { Tinymce },
  data () {
    return {
      formData: {
        short_name: '',
        display_url: '',
        name: '',
        is_active: true,
        description: `<h1>Ductt</h1>`
      },
      loading: false,
    }
  },
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    handleBlur() {
      console.log('blur');
    },
    handleFocus() {
      console.log('focus');
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
      );
    },
  },
}
</script>
<style scoped>

</style>