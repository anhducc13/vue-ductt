<template>
  <a-card>
    <div class="d-flex justify-content-between" slot="title">
      <h4>Danh sách sách</h4>
      <a-button type="primary" @click="() => { $router.push({path: '/admin/books/new'})}">
        <a-icon type="plus" />Thêm sách
      </a-button>
    </div>
    <a-table
      rowKey="id"
      :columns="columns"
      :dataSource="listBooks.results"
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
      <span slot="parent" slot-scope="parent">{{showParent(parent)}}</span>
      <span slot="status" slot-scope="status">
        <a-tag v-if="status" color="green">
          <strong>HIỆU LỰC</strong>
        </a-tag>
        <a-tag v-else color="red">
          <strong>VÔ HIỆU</strong>
        </a-tag>
      </span>
      <span slot="action" slot-scope="text, record">
        <router-link :to="`/admin/books/${record.id}/edit`">Chỉnh sửa</router-link>
        <a-divider type="vertical" />
        <a-button size="small" type="link">Xóa</a-button>
      </span>
    </a-table>
  </a-card>
</template>
<script>
import { fetchBooksList } from "@/api/books";
import { SALE_STATUS } from "@/constants/products";
import { cleanRequestBody } from "@/utils/common";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    sorter: true
  },
  {
    title: "Tên hiển thị",
    dataIndex: "short_name",
    sorter: true
  },
  {
    title: "URL",
    dataIndex: "url",
    sorter: true
  },
  {
    title: "Trạng thái",
    dataIndex: "is_active",
    scopedSlots: { customRender: "status" },
    filters: [
      { text: "Hiệu lực", value: "1" },
      { text: "Vô hiệu", value: "0" }
    ]
  },
  {
    title: "Trạng thái hàng",
    dataIndex: "sale_status",
    scopedSlots: { customRender: "saleStatus" },
    filters: Object.values(SALE_STATUS).map(e => ({
      text: e.name,
      value: e.key
    }))
  },
  {
    title: "Tồn kho",
    dataIndex: "quantity_in_stock",
    sorter: true
  },
  {
    title: "Giá bán",
    dataIndex: "sale_price",
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
  name: "BooksList",
  data() {
    return {
      filters: {
        page: 1,
        page_size: 10,
        q: ""
      },
      listBooks: {
        total_items: 0,
        results: []
      },
      columns
    };
  },
  mounted() {
    this.fetchList({});
  },
  methods: {
    async fetchList(params) {
      try {
        const { data } = await fetchBooksList(cleanRequestBody(params));
        this.listBooks = data;
      } catch {
        //
      }
    },
    handleTableChange(pagination, filters, sorter) {
      const { current: page, pageSize: page_size } = pagination;
      const { order, columnKey } = sorter;
      let newFilters = { page, page_size, q: this.filters.q };
      const { q } = this.filters;
      const { sale_status, is_active } = filters;
      if (q) {
        newFilters = { ...newFilters, q };
      }
      if (columnKey) {
        newFilters = { ...newFilters, sort_by: columnKey, order_by: order };
      }
      if (sale_status) {
        newFilters = { ...newFilters, sale_status: sale_status.join(",") };
      }
      if (is_active && Array.isArray(is_active) && is_active.length) {
        if (is_active.includes("1") && is_active.includes("0")) {
          //
        } else if (is_active.includes("1")) {
          newFilters = { ...newFilters, is_active: true };
        } else if (is_active.includes("0")) {
          newFilters = { ...newFilters, is_active: false };
        }
      }
      this.filters = newFilters;
      this.fetchList(newFilters);
    },
    showParent(parent) {
      if (parent) {
        const { short_name = "" } = parent;
        return short_name;
      }
      return "";
    },
    onSearch(text) {
      this.filters.q = text.trim();
      this.fetchList(this.filters);
    }
  }
};
</script>
<style scoped>
</style>