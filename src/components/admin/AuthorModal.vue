<template>
  <a-modal :visible="visible" @cancel="visible = false" okText="Lưu" cancelText="Hủy">
      <!-- <span v-if="isEditAuthor" slot="title">Chỉnh sửa (nhóm) tác giả</span> -->
      <span slot="title">Thêm (nhóm) tác giả</span>
      <p>Bla bla ...</p>
      <p>Bla bla ...</p>
      <p>Bla bla ...</p>
    </a-modal>
</template>

<script>
export default {
  name: 'AuthorModal',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    // isEditAuthor() {
    //   console.log(this.author && this.author.id)
    //   return this.author && this.author.id;
    // }
  },
  methods: {
    // close() {
    //   this.$emit("input", !this.visible);
    // }
  }
  // beforeDestroy() {
  //   console.log("dfsdfg")
  //   this.visible = false;
  //   this.author = {};
  // }
}
</script>

<style scoped>
  
</style>
