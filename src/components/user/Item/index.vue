<template>
  <article class="blog-gird-item blog-item blog-gird-item3">
    <div class="pageblog-thumb">
      <router-link :to="item.url">
        <img :alt="item.name" :src="item.images[0]" />
      </router-link>
    </div>
    <h2>
      <router-link :to="item.url">{{item.name}}</router-link>
    </h2>
    <span class="tzblog-meta">
      <em>
        <i class="fa fa-user"></i>
        {{item.user.fullname}}
      </em>
    </span>
    <div class="action-button-hiden">
      <p>{{item.short_description}}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: "Item",
  props: {
    item: {
      type: Object,
      required: false
    }
  }
};
</script>

<style>
</style>