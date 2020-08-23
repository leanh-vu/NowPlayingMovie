<template>
  <div class='c'>
    <top-bar></top-bar>
    <router-view/>
  </div>
</template>

<style>
 .c {
   height: 100%;
 }
</style>

<script>
import TopBar from './components/TopBar.vue'
export default {
  components: {
    'top-bar': TopBar
  }
}
</script>
