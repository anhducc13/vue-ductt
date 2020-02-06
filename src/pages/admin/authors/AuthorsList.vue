<template>
  <a-spin :spinning="loading">
    <a-card>
      <div class="d-flex justify-content-between" slot="title">
        <h4>Danh sách (nhóm) tác giả</h4>
        <a-button type="primary" @click="handleOpenModalAdd">
          <a-icon type="plus" />Thêm tác giả
        </a-button>
      </div>
      <a-table
        rowKey="id"
        :columns="columns"
        :dataSource="listAuthors.results"
        bordered
        @change="handleTableChange"
        :pagination="{
          total: listAuthors.total_items,
          current: filters.page,
          pageSize: filters.page_size,
          showQuickJumper: true,
          showSizeChanger: true,
          pageSizeOptions: ['5', '10', '15', '20', '50', '100'],
        }"
      >
        <template slot="title">
          <a-input-search
            size="large"
            placeholder="Tìm kiếm theo tên"
            @search="onSearch"
            :maxLength="255"
            v-model="filters.q"
          />
        </template>
        <span slot="rate" slot-scope="rate">
          <a-rate :value="rate" disabled />
        </span>
        <span slot="action" slot-scope="text, record">
          <a-button @click="() => handleOpenModalEdit(record.id)" size="small" type="link">Chỉnh sửa</a-button>
          <a-divider type="vertical" />
          <a-popconfirm
            title="Xóa (nhóm) tác giả này?"
            @confirm="() => handleDeleteAuthor(record.id)"
            okText="Đồng ý"
            cancelText="Không"
            placement="topRight"
          >
            <a-button size="small" type="link">Xóa</a-button>
          </a-popconfirm>
        </span>
      </a-table>
      <a-modal v-model="visible" @cancel="handleClodeModal" :footer="null">
        <span v-if="isEdit" slot="title">Chỉnh sửa (nhóm) tác giả</span>
        <span v-else slot="title">Thêm (nhóm) tác giả</span>
        <validation-observer ref="form" v-slot="{ handleSubmit }">
          <a-form @submit.prevent="handleSubmit(handleCreateOrEdit)">
            <validation-provider
              name="Tên tác giả"
              rules="required|minLength:8"
              v-slot="{ errors }"
            >
              <a-form-item
                label="Tên tác giả"
                required
                :help="errors[0]"
                :validate-status="errors[0] ? 'error' : ''"
              >
                <a-input :maxLength="255" placeholder="Nhập tên" v-model="author.name" />
              </a-form-item>
            </validation-provider>
            <a-form-item label="Xếp hạng">
              <a-rate v-model="author.rate" />
            </a-form-item>
            <a-form-item label="Mô tả">
              <markdown-editor v-model="author.description" />
            </a-form-item>
            <div class="d-flex justify-content-end">
              <a-button class="mr-2" @click.prevent="visible=false">Cancel</a-button>
              <a-button htmlType="submit" type="primary">Lưu</a-button>
            </div>
          </a-form>
        </validation-observer>
      </a-modal>
    </a-card>
  </a-spin>
</template>
<script>
import { notification } from "ant-design-vue";
import {
  fetchAuthorsList,
  fetchAuthor,
  addAuthor,
  editAuthor,
  deleteAuthor
} from "@/api/authors";
import { cleanRequestBody } from "@/utils/common";
import MarkdownEditor from "@/components/shared/MarkdownEditor";
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    sorter: true
  },
  {
    title: "Tên (nhóm) tác giả",
    dataIndex: "name",
    sorter: true
  },
  {
    title: "URL",
    dataIndex: "url",
    sorter: true
  },
  {
    title: "Xếp hạng",
    key: "rate",
    dataIndex: "rate",
    sorter: true,
    scopedSlots: { customRender: "rate" }
  },
  {
    title: "Thao tác",
    key: "action",
    scopedSlots: { customRender: "action" },
    width: "15%"
  }
];

const defaultFormdata = {
  name: "",
  rate: 0,
  description: ""
};

export default {
  name: "AuthorsList",
  components: { MarkdownEditor },
  data() {
    return {
      filters: {
        page: 1,
        page_size: 10,
        q: ""
      },
      listAuthors: {
        total_items: 0,
        results: []
      },
      author: { ...defaultFormdata },
      columns,
      visible: false,
      loading: false,
      isEdit: false
    };
  },
  mounted() {
    this.fetchList({});
  },
  methods: {
    async fetchList(params) {
      this.loading = true;
      try {
        const { data } = await fetchAuthorsList(params);
        this.listAuthors = data;
      } catch {
        //
      } finally {
        this.loading = false;
      }
    },
    handleTableChange(pagination, filters, sorter) {
      const { current: page, pageSize: page_size } = pagination;
      const { order, columnKey } = sorter;
      let newFilters = { page, page_size, q: this.filters.q };
      const { q } = this.filters;
      if (q) {
        newFilters = { ...newFilters, q };
      }
      if (columnKey) {
        newFilters = { ...newFilters, sort_by: columnKey, order_by: order };
      }
      this.filters = newFilters;
      this.fetchList(newFilters);
    },
    onSearch(text) {
      this.filters.q = text.trim();
      this.fetchList(this.filters);
    },
    handleOpenModalAdd() {
      this.author = { ...defaultFormdata };
      this.isEdit = false;
      this.visible = true;
    },
    async handleOpenModalEdit(id) {
      this.loading = true;
      try {
        const { data } = await fetchAuthor(id);
        this.isEdit = true;
        this.author = data;
        this.visible = true;
        this.loading = false;
      } catch {
        //
      } finally {
        this.loading = false;
      }
    },
    handleClodeModal() {
      this.visible = false;
      this.author = { ...defaultFormdata };
      this.$refs.form.reset();
    },
    async handleCreateOrEdit() {
      try {
        if (this.isEdit) {
          await editAuthor(this.author.id, cleanRequestBody(this.author));
          notification.success({
            message: "Thành công",
            description: "Chỉnh sửa thành công"
          });
          this.handleClodeModal();
          this.fetchList(this.filters);
        } else {
          const { data } = await addAuthor(cleanRequestBody(this.author));
          notification.success({
            message: "Thành công",
            description: `Thêm mới thành công (nhóm) tác giả ${data.name}`
          });
          this.handleClodeModal();
          this.fetchList(this.filters);
        }
      } catch (err) {
        //
      }
    },
    async handleDeleteAuthor(id) {
      this.loading = true;
      try {
        await deleteAuthor(id);
        notification.success({
          message: "Thành công",
          description: "Xóa thành công"
        });

        this.filters = { ...this.filters, page: 1 };
        this.fetchList(this.filters);
      } catch {
        //
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>
<style scoped>
</style>