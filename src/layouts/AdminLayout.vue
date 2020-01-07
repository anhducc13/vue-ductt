<script>
const isAdmin = () => {
  // try {
  //   const user = JSON.parse(localStorage.getItem("user"))
  //   return (user && user.admin)
  // } catch {
  //   return false
  // }
  return true
}
export default {
  components: {
    
  },
  created() {
    if (!isAdmin()) {
      this.$router.push('/403')
    }
  },
}
</script>

<template>
  <div>
    <slot />
  </div>
</template>