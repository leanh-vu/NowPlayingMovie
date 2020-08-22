<template>
  <div style="background: white">
    <router-link to="/detail" :model="1">
      <button class='button button-blue mb-05 button-fit'>OVERVIEW</button>
    </router-link>
    <div>Name</div>
    <div>title</div>
    <div>Yes</div>
  </div>
</template>

<style scoped>
  .movie-container {
    display: flex;
  }
</style>
<script>

export default {
  components: {
  }
}
</script>
