<template>
  <a-card>
    <div class="d-flex justify-content-between" slot="title">
      <h4>Danh sách danh mục</h4>
      <a-button type="primary" @click="() => { $router.push({path: '/admin/categories/new'})}">
        <a-icon type="plus" />Thêm danh mục
      </a-button>
    </div>
    <a-table
      rowKey="id"
      :columns="columns"
      :dataSource="listCategories.results"
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
        <a-tag v-if="status" color="green">HIỆU LỰC</a-tag>
        <a-tag v-else color="red">VÔ HIỆU</a-tag>
      </span>
      <span slot="action" slot-scope="text, record">
        <router-link :to="`/admin/categories/${record.id}/edit`">Chỉnh sửa</router-link>
        <a-divider type="vertical" />
        <a-button size="small" type="link">Xóa</a-button>
      </span>
    </a-table>
  </a-card>
</template>
<script>
import { fetchCategoriesList } from "@/api/categories";
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
    title: "Tên đầy đủ",
    dataIndex: "name",
    sorter: true
  },
  {
    title: "URL",
    dataIndex: "display_url",
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
    title: "Danh mục cha",
    dataIndex: "parent",
    scopedSlots: { customRender: "parent" },
    filters: [
      { text: "Danh mục cấp 1", value: "parent" },
      { text: "Danh mục cấp 2", value: "children" }
    ]
  },
  {
    title: "Thao tác",
    key: "action",
    scopedSlots: { customRender: "action" },
    width: "15%"
  }
];

export default {
  name: "CategoriesList",
  data() {
    return {
      filters: {
        page: 1,
        page_size: 10,
        q: ""
      },
      listCategories: {
        total_items: 0,
        results: []
      },
      columns
    };
  },
  mounted() {
    fetchCategoriesList().then(res => {
      const { result } = res;
      this.listCategories = result;
    });
  },
  methods: {
    handleTableChange(pagination, filters, sorter) {
      const { current: page, pageSize: page_size } = pagination;
      const { order, columnKey } = sorter;
      const { parent, is_active } = filters;
      let newFilters = { page, page_size, q: this.filters.q };
      const { q } = this.filters;
      if (q) {
        newFilters = { ...newFilters, q };
      }
      if (columnKey) {
        newFilters = { ...newFilters, sort_by: columnKey, order_by: order };
      }
      if (parent && Array.isArray(parent) && parent.length) {
        if (parent.includes("parent") && parent.includes("children")) {
          //
        } else if (parent.includes("parent")) {
          newFilters = { ...newFilters, is_parent: true };
        } else if (parent.includes("children")) {
          newFilters = { ...newFilters, is_parent: false };
        }
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
      console.log(newFilters);
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
    }
  }
};
</script>
<style scoped>
</style>