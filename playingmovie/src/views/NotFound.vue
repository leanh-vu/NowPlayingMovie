<template>
    <div class="container">
        <div class="row">
        <div class="col-md-8 col-md-offset-2 text-center">
            <h2 class="not-found">404 Not Found</h2>
            <h2 class="not-found">Oops! It seems that this page does not exist.</h2>
        </div>
        <router-link to="/">
            <button class='button m-top-1'>To Movie List</button>
        </router-link>
        </div>
    </div>
</template>
<style scoped>
    .not-found {
        color: white
    }
</style>
<script>

export default {
  name: 'Opening',
  components: {
  }
}
</script>
