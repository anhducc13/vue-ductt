<template>
  <a-card>
    <div class="d-flex justify-content-between" slot="title">
      <h4>Danh sách nhà xuất bản</h4>
      <a-button type="primary" @click="() => { $router.push({path: '/admin/categories/new'})}">
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
      <span slot="action" slot-scope="text, record">
        <router-link :to="`/admin/categories/${record.id}/edit`">Chỉnh sửa</router-link>
        <a-divider type="vertical" />
        <a-button size="small" type="link">Xóa</a-button>
      </span>
    </a-table>
  </a-card>
</template>
<script>
import { fetchPublishersList } from "@/api/publishers";
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
    title: "Thao tác",
    key: "action",
    scopedSlots: { customRender: "action" },
    width: "15%"
  }
];

export default {
  name: "PublishersList",
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
      columns
    };
  },
  mounted() {
    fetchPublishersList().then(res => {
      const { result } = res;
      this.listPublishers = result;
    });
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
    }
  }
};
</script>
<style scoped>
</style>