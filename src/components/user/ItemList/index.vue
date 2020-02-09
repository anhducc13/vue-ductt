<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="row gird-margin">
          <div v-for="item in list" :key="item.id" class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <Item :item="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Item from "../Item";
export default {
  name: "ItemList",
  components: { Item },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    },
  },
};
</script>

<style>
</style>