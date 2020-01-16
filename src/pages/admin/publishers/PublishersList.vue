<template>
  <a-card>
    <div class="d-flex justify-content-between" slot="title">
      <h4>Danh sách nhà xuất bản</h4>
      <a-button type="primary" @click.prevent="handleOpenModalAdd">
        <a-icon type="plus" />Thêm NXB
      </a-button>
    </div>
    <a-table
      rowKey="id"
      :columns="columns"
      :dataSource="listPublishers.results"
      bordered
      @change="handleTableChange"
      :pagination="{
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
        <a-button size="small" type="link">Xóa</a-button>
      </span>
    </a-table>
    <a-modal v-model="visible" @cancel="visible = false" :footer="null">
      <span v-if="isEditPublisher" slot="title">Chỉnh sửa NXB</span>
      <span v-else slot="title">Thêm NXB</span>
      <validation-observer ref="form" v-slot="{ handleSubmit }">
        <a-form @submit.prevent="handleSubmit(handleCreate)">
          <validation-provider name="Tên NXB" rules="required|minLength:8" v-slot="{ errors }">
            <a-form-item
              label="Tên NXB"
              required
              :help="errors[0]"
              :validate-status="errors[0] ? 'error' : ''"
            >
              <a-input :maxLength="255" placeholder="Nhập tên" v-model="publisher.name" />
            </a-form-item>
          </validation-provider>
          <a-form-item label="Xếp hạng">
            <a-rate v-model="publisher.rate" />
          </a-form-item>
          <a-form-item label="Mô tả">
            <markdown-editor v-bind:value="publisher.description" />
          </a-form-item>
          <div class="d-flex justify-content-end">
            <a-button class="mr-2" @click.prevent="visible=false">Cancel</a-button>
            <a-button htmlType="submit" type="primary">Lưu</a-button>
          </div>
        </a-form>
      </validation-observer>
    </a-modal>
  </a-card>
</template>
<script>
import { fetchPublishersList, fetchPublisher } from "@/api/publishers";
import MarkdownEditor from "@/components/shared/MarkdownEditor";
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    sorter: true
  },
  {
    title: "Tên nhà xuất bản",
    dataIndex: "name",
    sorter: true
  },
  {
    title: "URL",
    dataIndex: "display_url",
    sorter: true
  },
  {
    title: "Xếp hạng",
    key: "rate",
    dataIndex: "rate",
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
  name: "PublishersList",
  components: { MarkdownEditor },
  data() {
    return {
      filters: {
        page: 1,
        page_size: 10,
        q: ""
      },
      listPublishers: {
        total_items: 0,
        results: []
      },
      publisher: defaultFormdata,
      columns,
      visible: false,
      loading: false
    };
  },
  mounted() {
    fetchPublishersList().then(res => {
      const { result } = res;
      this.listPublishers = result;
    });
  },
  computed: {
    isEditPublisher() {
      return this.publisher && this.publisher.id;
    }
  },
  methods: {
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
      console.log(newFilters);
    },
    onSearch(text) {
      this.filters.q = text.trim();
    },
    handleOpenModalAdd() {
      this.visible = true;
    },
    handleOpenModalEdit(id) {
      this.loading = true;
      fetchPublisher(id)
        .then(res => {
          const { result } = res;
          this.publisher = result;
          this.visible = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    handleCreate() {
      console.log(this.publisher);
    }
  },
  watch: {
    visible() {
      if (!this.visible) {
        this.$refs.form.reset();
        this.publisher = defaultFormdata;
      }
    }
  }
};
</script>
<style scoped>
</style>