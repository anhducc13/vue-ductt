<template>
  <a-row :gutter="12">
    <a-col>
      <a-card>
        <div class="d-flex justify-content-between" slot="title">
          <!-- <h4 v-if="isEditCategory">Chỉnh sửa sách</h4> -->
          <h4>Thêm mới sách</h4>
          <a-button
            type="primary"
            @click="
              () => {
                $router.push({ path: '/admin/books/list' });
              }
            "
          >
            <a-icon type="left" />Về danh sách
          </a-button>
        </div>
        <validation-observer ref="bookForm" v-slot="{ handleSubmit }">
          <a-form @submit.prevent="handleSubmit(saveCategory)">
            <a-divider>
              <h4>Thông tin chung</h4>
            </a-divider>
            <a-col :lg="{ span: 12}">
              <validation-provider
                name="Tên ngắn gọn"
                rules="required|minLength:8"
                v-slot="{ errors }"
              >
                <a-form-item required :help="errors[0]" :validate-status="errors[0] ? 'error' : ''">
                  <span slot="label">
                    Tên ngắn gọn&nbsp;
                    <a-tooltip title="Tên hiển thị ở màn hình danh sách">
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
            </a-col>
            <a-col :lg="{ span: 12}">
              <validation-provider
                name="Tên đầy đủ"
                rules="required|minLength:8"
                v-slot="{ errors }"
              >
                <a-form-item required :help="errors[0]" :validate-status="errors[0] ? 'error' : ''">
                  <span slot="label">
                    Tên đầy đủ&nbsp;
                    <a-tooltip title="Tên đầy đủ của sách">
                      <a-icon type="question-circle-o" />
                    </a-tooltip>
                  </span>
                  <a-input placeholder="Nhập tên" v-model="formData.name" />
                </a-form-item>
              </validation-provider>
            </a-col>
            <a-col :lg="{ span: 12}">
              <a-form-item label="Danh mục">
                <a-select
                  allowClear
                  placeholder="Chọn danh mục"
                  :style="{width: '100%'}"
                  v-model="formData.category_id"
                >
                  <a-select-opt-group v-for="c in categories" :key="c.id" :label="c.short_name">
                    <a-select-option v-for="cc in c.children" :key="cc.id">{{ cc.short_name }}</a-select-option>
                  </a-select-opt-group>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :lg="{ span: 12}">
              <a-form-item label="NXB">
                <a-select
                  allowClear
                  showSearch
                  placeholder="Chọn NXB"
                  :style="{width: '100%'}"
                  optionFilterProp="children"
                  :filterOption="filterOption"
                  v-model="formData.publisher_id"
                >
                  <a-select-option v-for="p in publishers" :key="p.id">{{p.name}}</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :lg="{ span: 12}">
              <a-form-item label="Tác giả">
                <a-select
                  allowClear
                  mode="multiple"
                  placeholder="Chọn tác giả"
                  :style="{width: '100%'}"
                  optionFilterProp="children"
                  :filterOption="filterOption"
                  v-model="formData.author_ids"
                >
                  <a-select-option v-for="a in authors" :key="a.id">{{a.name}}</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :lg="{ span: 12}">
              <a-form-item>
                <span slot="label">
                  Hiệu lực&nbsp;
                  <a-tooltip title="Hiển thị với người dùng">
                    <a-icon type="question-circle-o" />
                  </a-tooltip>
                </span>
                <a-switch v-model="formData.is_active" />
              </a-form-item>
            </a-col>
            <a-col :span="24">
              <a-form-item label="Mô tả ngắn">
                <a-textarea
                  placeholder="Nhập mô tả ngắn"
                  :autosize="{ minRows: 2, maxRows: 6 }"
                  v-model="formData.short_description"
                />
              </a-form-item>
            </a-col>
            <a-col :span="24">
              <a-form-item label="Mô tả sách">
                <markdown-editor v-bind:value="formData.description" />
              </a-form-item>
            </a-col>
            <a-col :lg="{ span: 12}">
              <a-form-item label="Ngày phát hành">
                <a-date-picker :style="{ width: '100%'}" v-model="formData.release_date" />
              </a-form-item>
            </a-col>
            <a-col :lg="{ span: 12}">
              <a-form-item label="Số trang">
                <a-input-number
                  placeholder="Nhập số trang"
                  :style="{ width: '100%'}"
                  :min="1"
                  v-model="formData.number_of_pages"
                />
              </a-form-item>
            </a-col>
            <a-col :lg="{ span: 12}">
              <a-form-item label="Kích thước (VD: 21 x 14 hoặc 21 x 14 x 2.5 )">
                <a-input placeholder="Nhập kích thước" :maxLength="255" v-model="formData.size" />
              </a-form-item>
            </a-col>
            <a-col :lg="{ span: 12}">
              <a-form-item label="Cân nặng (gam)">
                <a-input-number
                  placeholder="Nhập cân nặng"
                  :style="{ width: '100%'}"
                  :min="1"
                  v-model="formData.weight"
                />
              </a-form-item>
            </a-col>
            <a-col :span="24">
              <a-form-item label="Hình ảnh sản phẩm">
                <a-upload
                  :customRequest="uploadImage"
                  listType="picture-card"
                  :fileList="fileListImage"
                  @preview="handlePreviewImage"
                  @change="handleChangeImage"
                >
                  <div v-if="fileListImage.length < 5">
                    <a-icon type="plus" />
                    <div class="ant-upload-text">Tải lên</div>
                  </div>
                </a-upload>
              </a-form-item>
              <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancelPreviewImage">
                <img alt="example" style="width: 100%" :src="previewImage" />
              </a-modal>
            </a-col>
            <a-col :span="24">
              <a-form-item label="Bản đọc thử">
                <a-upload :action="uploadImage" :fileList="fileDemo" @change="handleChangeFileDemo">
                  <a-button :disabled="fileDemo.length >= 1">
                    <a-icon type="upload" />Tải lên
                  </a-button>
                </a-upload>
              </a-form-item>
              <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancelPreviewImage">
                <img alt="example" style="width: 100%" :src="previewImage" />
              </a-modal>
            </a-col>
            <a-divider>
              <h4>Thông tin sale</h4>
            </a-divider>
            <a-col :md="{ span: 8}">
              <a-form-item label="Giá nhập (VNĐ)">
                <a-input-number
                  placeholder="Nhập giá"
                  :formatter="value => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                  :parser="value => value.replace(/\$\s?|(,*)/g, '')"
                  :style="{ width: '100%'}"
                  :min="0"
                  v-model="formData.import_price"
                />
              </a-form-item>
            </a-col>
            <a-col :md="{ span: 8}">
              <a-form-item label="Giá bìa (VNĐ)">
                <a-input-number
                  placeholder="Nhập giá"
                  :formatter="value => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                  :parser="value => value.replace(/\$\s?|(,*)/g, '')"
                  decimalSeparator=","
                  :style="{ width: '100%'}"
                  :min="0"
                  v-model="formData.root_price"
                />
              </a-form-item>
            </a-col>
            <a-col :md="{ span: 8}">
              <a-form-item label="Giá bán (VNĐ)">
                <a-input-number
                  placeholder="Nhập giá"
                  :formatter="value => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                  :parser="value => value.replace(/\$\s?|(,*)/g, '')"
                  decimalSeparator=","
                  :style="{ width: '100%'}"
                  :min="0"
                  v-model="formData.sale_price"
                />
              </a-form-item>
            </a-col>
            <a-col :lg="{ span: 12}">
              <validation-provider name="Trạng thái hàng" rules="required" v-slot="{ errors }">
                <a-form-item
                  label="Trạng thái hàng"
                  required
                  :help="errors[0]"
                  :validate-status="errors[0] ? 'error' : ''"
                >
                  <a-select
                    allowClear
                    placeholder="Chọn trạng thái"
                    :style="{width: '100%'}"
                    v-model="formData.sale_status"
                  >
                    <a-select-option
                      v-for="ss in Object.values(SALE_STATUS)"
                      :key="ss.key"
                    >{{ss.name}}</a-select-option>
                  </a-select>
                </a-form-item>
              </validation-provider>
            </a-col>
            <a-col :lg="{ span: 12}">
              <validation-provider
                name="Số lượng"
                :rules="objValidateQuantityInStock"
                v-slot="{ errors }"
              >
                <a-form-item
                  label="Số lượng trong kho"
                  :help="errors[0]"
                  :validate-status="errors[0] ? 'error' : ''"
                >
                  <a-input-number
                    placeholder="Nhập số lượng"
                    :style="{ width: '100%'}"
                    :min="0"
                    :disabled="formData.sale_status === outOfStockStatus"
                    v-model="formData.quantity_in_stock"
                  />
                </a-form-item>
              </validation-provider>
            </a-col>
            <a-col :lg="{ span: 12}" v-if="formData.sale_status === upcomingStatus">
              <validation-provider
                name="Ngày mở bán"
                :rules="{ required: formData.sale_status === upcomingStatus}"
                v-slot="{ errors }"
              >
                <a-form-item
                  label="Ngày mở bán"
                  required
                  :help="errors[0]"
                  :validate-status="errors[0] ? 'error' : ''"
                >
                  <a-date-picker :style="{ width: '100%'}" v-model="formData.on_sale_date" />
                </a-form-item>
              </validation-provider>
            </a-col>
            <a-col :span="24">
              <a-form-item>
                <a-button :loading="loading" htmlType="submit" type="primary">Lưu sách</a-button>
              </a-form-item>
            </a-col>
          </a-form>
        </validation-observer>
      </a-card>
    </a-col>
  </a-row>
</template>
<script>
import firebase from "firebase";
import MarkdownEditor from "@/components/shared/MarkdownEditor";
import { mapGetters } from "vuex";
import { extraCategories, generateNameFromTime } from "@/utils/common";
import { SALE_STATUS } from "@/constants/products";

const defaultFormdata = {
  short_name: "",
  name: "",
  category_id: undefined,
  publisher_id: undefined,
  author_ids: [],
  is_active: false,
  short_description: "",
  description: "",
  release_date: null,
  number_of_page: null,
  size: "",
  weight: null,
  sale_status: SALE_STATUS.AVAILABLE.key,
  quantity_in_stock: null,
  on_sale_date: null,
  import_price: null,
  root_price: null,
  sale_price: null,
  images: [],
  demo: null
};

export default {
  name: "BookNew",
  components: { MarkdownEditor },
  data() {
    return {
      formData: defaultFormdata,
      loading: false,
      SALE_STATUS,
      upcomingStatus: SALE_STATUS.UPCOMING.key,
      outOfStockStatus: SALE_STATUS.OUTOFSTOCK.key,
      previewVisible: false,
      previewImage: "",
      fileListImage: [],
      fileDemo: []
    };
  },
  mounted: function() {
    this.$store.dispatch("extra/fetchExtraData");
    if (this.isEditBook) {
      this.formData = {
        short_name: "dgdfgfg",
        name: "dfgfdgdfdsfsd",
        category_id: undefined,
        publisher_id: undefined,
        author_ids: [],
        is_active: false,
        short_description: "sdfdfdf",
        description: "sdfdfds",
        release_date: null,
        number_of_page: null,
        size: "sdfdsfsdf",
        weight: null,
        sale_status: SALE_STATUS.AVAILABLE.key,
        quantity_in_stock: null,
        on_sale_date: null,
        import_price: null,
        root_price: null,
        sale_price: null,
        images: ["http://dvhbooks.com/uploads/articles/MwPFtJR2PL.jpg"],
        demo: "http://www.africau.edu/images/default/sample.pdf"
      };
    }
    this.fileListImage = this.formData.images.map(img => ({
      uid: img,
      name: img,
      status: "done",
      url: img
    }));
    if (this.formData.demo) {
      const file = this.formData.demo;
      this.fileDemo = [
        {
          uid: file,
          name: file,
          status: "done",
          url: file
        }
      ];
    }
  },
  computed: {
    ...mapGetters(["extraData"]),
    categories() {
      const { categories } = this.extraData;
      if (Array.isArray(categories)) {
        return extraCategories(categories);
      }
      return [];
    },
    publishers() {
      const { publishers } = this.extraData;
      if (Array.isArray(publishers)) {
        return publishers;
      }
      return [];
    },
    authors() {
      const { authors } = this.extraData;
      if (Array.isArray(authors)) {
        return authors;
      }
      return [];
    },
    objValidateQuantityInStock() {
      let obj = {};
      if (
        [SALE_STATUS.AVAILABLE.key, SALE_STATUS.UPCOMING.key].includes(
          this.formData.sale_status
        )
      ) {
        obj = { ...obj, min: { length: 1 }, required: true };
      }
      if (this.formData.quantity_in_stock) {
        obj = { ...obj, integer: true };
      }
      return obj;
    }
  },
  methods: {
    handleCancelPreviewImage() {
      this.previewVisible = false;
    },
    handlePreviewImage(file) {
      this.previewImage = file.url || file.thumbUrl;
      this.previewVisible = true;
    },
    handleChangeImage({ fileList }) {
      this.fileListImage = fileList;
      this.formData.images = fileList.filter(f => f.status === "done").map(f => f.response.url);
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    },
    handleChangeFileDemo(info) {
      let fileDemo = [...info.fileList];
      fileDemo = fileDemo.slice(-2);
      fileDemo = fileDemo.map(file => {
        if (file.response) {
          file.url = file.response.url;
        }
        return file;
      });
      this.fileDemo = fileDemo;
    },
    uploadImage({ file, onProgress, onSuccess, onError }) {
      const storageRef = firebase
        .storage()
        .ref(`images/${generateNameFromTime()}`)
        .put(file);
      storageRef.on(
        `state_changed`,
        snapshot => {
          const percent =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          onProgress({ percent });
        },
        error => {
          onError(error);
        },
        () => {
          storageRef.snapshot.ref.getDownloadURL().then(url => {
            console.log(url);
            onSuccess({
              name: url,
              status: "done",
              url
            });
          });
        }
      );
    },
    saveCategory() {
      console.log(this.formData);
    }
  },
  watch: {
    "formData.sale_status": {
      handler(newData) {
        if (newData === SALE_STATUS.OUTOFSTOCK.key) {
          this.formData.quantity_in_stock = 0;
        }
      },
      deep: true
    }
  }
};
</script>
<style scoped></style>
