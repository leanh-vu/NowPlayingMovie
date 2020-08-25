<template>
    <div class="container">
        <transition name='jump'>
            <div v-if='isShow'>
                <h2 class="not-found">404 Not Found</h2>
                <h2 class="not-found">Oops! It seems that this page does not exist.</h2>
            </div>
        </transition>
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
  data () {
      return {
          isShow: false
      }
  },
  mounted () {
      setTimeout(() => {
          this.isShow = true
      }, 500)
  }
}
</script>
