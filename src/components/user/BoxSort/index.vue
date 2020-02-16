<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 col-md-12">
        <div class="box_tool clearfix">
          <div class="result-short pull-right">
            <p class="result-count">Sắp xếp : </p>
            <form class="filter-xs" method="POST">
              <div class="orderby-wrapper">
                <select
                  name="sortBy"
                  class="selectBox"
                  style="padding: 0px 10px; height: 30px;"
                  :value="selected"
                  @change="handleChange"
                >
                  <option value="created-desc">Hàng mới nhất</option>
                  <option value="created-asc">Hàng cũ nhất</option>
                  <option value="alpha-asc">A &rarr; Z</option>
                  <option value="alpha-desc">Z &rarr; A</option>
                  <option value="price-asc">Giá tăng dần</option>
                  <option value="price-desc">Giá giảm dần</option>
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
      default: "created-desc"
    },
  },
  methods: {
    handleChange(e) {
      const currRoute = this.$route;
      this.$router.push({
        ...currRoute,
        query: {
          ...currRoute.query,
          sort: e.target.value,
        }
      })
    }
  }
};
</script>

<style>
</style>