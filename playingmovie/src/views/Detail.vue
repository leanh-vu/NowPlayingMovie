<template>
  <div class="container">
    <div>{{model}}</div>
    <div>asdasd</div>
  </div>
</template>
<style scoped>
  .container {
    width: 95vw;
    height: 90vh;
    display: flex;
    justify-content: space-between;
  }
</style>
<script>
export default {
  name: 'Body',
  components: {
  },
  data () {
    return {
        "title": "The Secret Garden",
        "original_title": "The Secret Garden",
        "original_language": "en",
        "overview": "Mary Lennox is born in India to wealthy British parents who never wanted her. When her parents suddenly die, she is sent back to England to live with her uncle. She meets her sickly cousin, and the two children find a wondrous secret garden lost in the grounds of Misselthwaite Manor.",
        "poster_path": "https://image.tmdb.org/t/p/w500/5MSDwUcqnGodFTvtlLiLKK0XKS.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/w500/8PK4X8U3C79ilzIjNTkTgjmc4js.jpg",
        "popularity": 97.043,
        "adult": false,
        "vote_count": 101,
        "vote_average": 7.3,
        "release_date": "2020-07-08"
    }
  }
}
</script>
