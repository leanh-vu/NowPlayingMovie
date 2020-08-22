<template>
    <div class="container">
        <div class="row">
        <div class="col-md-8 col-md-offset-2 text-center">
            <h2 class="title text-danger">404 Not Found</h2>
            <h2 class="title">Oops! It seems that this page does not exist.</h2>
        </div>
        <router-link to="/">
            <button class='button m-top-1'>Top</button>
        </router-link>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Opening',
  components: {
  }
}
</script>
