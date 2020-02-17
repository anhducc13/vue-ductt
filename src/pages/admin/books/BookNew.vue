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
          <a-form @submit.prevent="handleSubmit(saveBook)">
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
                  mode="multiple"
                  placeholder="Chọn danh mục"
                  :style="{width: '100%'}"
                  optionFilterProp="children"
                  :filterOption="filterOption"
                  v-model="formData.category_ids"
                >
                  <a-select-option v-for="c in categories" :key="c.id">{{c.name}}</a-select-option>
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
            <a-col :lg="{ span: 24}">
              <a-form-item label="Mô tả ngắn">
                <a-textarea
                  placeholder="Nhập mô tả ngắn"
                  :autosize="{ minRows: 2, maxRows: 6 }"
                  v-model="formData.short_description"
                />
              </a-form-item>
            </a-col>
            <a-col :lg="{ span: 24}">
              <a-form-item label="Mô tả sách">
                <vue-editor
                  v-model="formData.description"
                  useCustomImageHandler
                  @image-added="handleImageAdded"
                  :disabled="loadingUploadImage"
                />
              </a-form-item>
            </a-col>
            <a-col :span="24">
              <a-form-item>
                <span slot="label">
                  Hình ảnh sản phẩm&nbsp;
                  <a-tooltip title="Tối đa 5 hình ảnh, cho phép định dạng jpg/png">
                    <a-icon type="question-circle-o" />
                  </a-tooltip>
                </span>
                <a-upload
                  :customRequest="uploadImage"
                  :beforeUpload="beforeUpLoadImage"
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
              <a-form-item>
                <span slot="label">
                  Bản đọc thử&nbsp;
                  <a-tooltip title="Chỉ tải lên 1 file ở định dạng doc/docx/pdf">
                    <a-icon type="question-circle-o" />
                  </a-tooltip>
                </span>
                <a-upload
                  :customRequest="uploadFileDemo"
                  :beforeUpload="beforeUpLoadFileDemo"
                  :fileList="fileDemo"
                  @change="handleChangeFileDemo"
                >
                  <a-button v-if="fileDemo.length === 0">
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
            <a-col :lg="{ span: 8}">
              <a-form-item label="Giá nhập (VNĐ)">
                <a-input-number
                  placeholder="Nhập giá"
                  :style="{ width: '100%'}"
                  :min="0"
                  v-model="formData.import_price"
                />
              </a-form-item>
            </a-col>
            <a-col :lg="{ span: 8}">
              <a-form-item label="Giá bìa (VNĐ)">
                <a-input-number
                  placeholder="Nhập giá"
                  decimalSeparator=","
                  :style="{ width: '100%'}"
                  :min="0"
                  v-model="formData.root_price"
                />
              </a-form-item>
            </a-col>
            <a-col :lg="{ span: 8}">
              <a-form-item label="Giá bán (VNĐ)">
                <a-input-number
                  placeholder="Nhập giá"
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
                <a-button htmlType="submit" type="primary">Lưu sách</a-button>
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
import { VueEditor } from "vue2-editor";
import { mapGetters } from "vuex";
import { message, notification } from "ant-design-vue";
import { addBook, fetchBook, editBook } from "@/api/books";
import { cleanRequestBody } from "@/utils/common";
import { generateName } from "@/utils/common";
import { SALE_STATUS } from "@/constants/products";
import imageVueEditor from "@/mixins/imageVueEditor";
import moment from "moment";

const defaultFormdata = {
  short_name: "",
  name: "",
  category_ids: [],
  is_active: false,
  short_description: "",
  description: "",
  release_date: null,
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
  components: { VueEditor },
  data() {
    return {
      formData: { ...defaultFormdata },
      SALE_STATUS,
      upcomingStatus: SALE_STATUS.UPCOMING.key,
      outOfStockStatus: SALE_STATUS.OUTOFSTOCK.key,
      previewVisible: false,
      previewImage: "",
      showImage: true,
      fileListImage: [],
      showFileDemo: true,
      fileDemo: []
    };
  },
  mixins: [imageVueEditor],
  async mounted() {
    this.$store.dispatch("extra/fetchExtraData");
    if (this.isEditBook) {
      await this.fetchDetailBook();
    }
    this.fileListImage = this.formData.images.map(img => ({
      uid: img,
      name: img,
      status: "done",
      url: img,
      response: {
        url: img
      }
    }));
    if (this.formData.demo) {
      const { demo: file } = this.formData;
      this.fileDemo = [
        {
          uid: file,
          name: file,
          status: "done",
          url: file,
          response: {
            url: file
          }
        }
      ];
    }
  },
  computed: {
    ...mapGetters(["extraData"]),
    categories() {
      const { categories } = this.extraData;
      if (Array.isArray(categories)) {
        return categories;
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
    },
    isEditBook: function() {
      return !!this.$route.params.id;
    }
  },
  methods: {
    async fetchDetailBook() {
      try {
        const id = this.$route.params.id;
        const { data } = await fetchBook(id);
        this.formData = {
          ...data,
          short_description: data.short_description || "",
          description: data.description || "",
          category_ids: data.categories.map(c => c.id),
          release_date: data.release_date ? moment(data.release_date) : null,
          on_sale_date: data.on_sale_date ? moment(data.on_sale_date) : null,
          images: data.images.map(c => c.url)
        };
      } catch {
        //
      }
    },
    handleCancelPreviewImage() {
      this.previewVisible = false;
    },
    handlePreviewImage(file) {
      this.previewImage = file.url || file.thumbUrl;
      this.previewVisible = true;
    },
    handleChangeImage({ fileList }) {
      if (this.showImage) {
        console.log(fileList);
        this.fileListImage = fileList;
        this.formData.images = fileList
          .filter(f => f.status === "done")
          .map(f => f.response.url);
      }
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    },
    handleChangeFileDemo(info) {
      if (this.showFileDemo) {
        let fileDemo = [...info.fileList];
        fileDemo = fileDemo.slice(-2);
        fileDemo = fileDemo.map(file => {
          if (file.response) {
            file.url = file.response.url;
          }
          return file;
        });
        this.fileDemo = fileDemo;
        const listUrl = fileDemo
          .filter(f => f.status === "done")
          .map(f => f.url);
        this.formData.demo = listUrl[0];
      }
    },
    beforeUpLoadFileDemo(file) {
      const ext = file.name.split(".").pop();
      const isDocumentFile = ext === "pdf" || ext === "docx" || ext === "doc";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isDocumentFile) {
        message.error("File xem trước phải ở định dạng doc/docx/pdf");
        this.showFileDemo = false;
        return false;
      } else if (!isLt2M) {
        message.error("File phải có kích thước nhỏ hơn 2MB!");
        this.showFileDemo = false;
        return false;
      } else {
        this.showFileDemo = true;
        return true;
      }
    },
    beforeUpLoadImage(file) {
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      const isLt1M = file.size / 1024 / 1024 < 1;
      if (!isJpgOrPng) {
        message.error("Ảnh phải ở định dạng jpg/png!");
        this.showImage = false;
        return false;
      } else if (!isLt1M) {
        message.error("Ảnh phải có kích thước nhỏ hơn 1MB!");
        this.showImage = false;
        return false;
      } else {
        this.showImage = true;
        return true;
      }
    },
    uploadFile(folderName, { file, onProgress, onSuccess, onError }) {
      const storageRef = firebase
        .storage()
        .ref(`${folderName}/${generateName(file)}`)
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
            onSuccess({
              name: url,
              status: "done",
              url
            });
          });
        }
      );
    },
    uploadFileDemo({ file, onProgress, onSuccess, onError }) {
      this.uploadFile("files", { file, onProgress, onSuccess, onError });
    },
    uploadImage({ file, onProgress, onSuccess, onError }) {
      this.uploadFile("images", { file, onProgress, onSuccess, onError });
    },
    async saveBook() {
      try {
        if (this.isEditBook) {
          const id = this.$route.params.id;
          await editBook(id, this.formData);
          notification.success({
            message: "Thành công",
            description: "Chỉnh sửa thành công"
          });
          this.$router.push({ path: "/admin/books/list" });
        } else {
          const { data } = await addBook(this.formData);
          notification.success({
            message: "Thành công",
            description: `Thêm mới thành công sách ${data.short_name}`
          });
          this.$router.push({ path: "/admin/books/list" });
        }
      } catch (err) {
        console.log(err);
        //
      }
    }
  },
  watch: {
    "formData.sale_status": {
      handler(newData) {
        if (newData === SALE_STATUS.OUTOFSTOCK.key) {
          this.formData.quantity_in_stock = 0;
        }
        if (newData !== SALE_STATUS.UPCOMING.key) {
          this.formData.on_sale_date = null;
        }
      },
      deep: true
    }
  }
};
</script>
<style scoped></style>
