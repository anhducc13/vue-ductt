<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 col-md-12">
        <div class="box_tool clearfix">
          <div class="result-short pull-right">
            <p class="result-count">Sắp xếp :</p>
            <form class="filter-xs" method="POST">
              <div class="orderby-wrapper">
                <select
                  name="sortBy"
                  class="selectBox"
                  style="padding: 0px 10px; height: 30px;"
                  :value="selected"
                  @change="handleChange"
                >
                  <option value="created_at-desc">Hàng mới nhất</option>
                  <option value="created_at-asc">Hàng cũ nhất</option>
                  <option value="name-asc">A &rarr; Z</option>
                  <option value="name-desc">Z &rarr; A</option>
                  <option value="sale_price-asc">Giá tăng dần</option>
                  <option value="sale_price-desc">Giá giảm dần</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoxSort",
  props: {
    selected: {
      type: String,
      default: "created_at-desc"
    }
  },
  methods: {
    handleChange(e) {
      const [sort_by, order_by] = e.target.value.split("-");
      const currRoute = this.$route;
      this.$router.push({
        ...currRoute,
        query: {
          ...currRoute.query,
          sort_by,
          order_by
        }
      });
    }
  }
};
</script>

<style>
</style>