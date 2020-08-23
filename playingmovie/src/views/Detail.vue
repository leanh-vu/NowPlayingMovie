<template>
  <div class="container">
    <div class='content-container inde-scroll scrollbar-light-blue'>
      <div>{{currentMovieInfo.title}}</div>
      <div>{{currentMovieInfo.original_language}}</div>
      <div>{{currentMovieInfo.overview}}</div>
      <div>{{currentMovieInfo.poster_path}}</div>
      <div>{{currentMovieInfo.backdrop_path}}</div>
      <div>{{currentMovieInfo.popularity}}</div>
      <div>{{currentMovieInfo.adult}}</div>
      <div>{{currentMovieInfo.vote_count}}</div>
      <div>{{currentMovieInfo.vote_average}}</div>
      <div>{{currentMovieInfo.release_date}}</div>
      <router-link to="/">
        <button class='button button-blue mb-05 button-fit'>to movie list</button>
      </router-link>
    </div>
  </div>
</template>
<style scoped>
  .scrollbar-light-blue::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.1);
    background-color: #F5F5F5;
    border-radius: 5px; 
    }

  .scrollbar-light-blue::-webkit-scrollbar {
    width: 9px;
    background-color: #F5F5F5; 
    }

  .scrollbar-light-blue::-webkit-scrollbar-thumb {
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.1);
    background-color: #ff4081; 
    }

  .inde-scroll {
    position: relative;
    overflow-y: scroll;
    box-sizing: border-box
  }
  .container {
    width: 98vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .content-container {
    width: 100%;
    height: 95%;
    background-color: rgba(255, 255, 255, .9);
    border-radius: 5px;
  }
</style>
<script>
import {mapState} from 'vuex'
export default {
  name: 'Body',
  components: {
  },
  data () {
    return {
      currentMovieInfo: {
        title : '',
        original_language : '',
        overview : '',
        poster_path : '',
        backdrop_path : '',
        popularity : '',
        adult : '',
        vote_count : '',
        vote_average : '',
        release_date : '',
      }
    }
  },
  methods: {
    getMovieInformation () {
      const query = `{details(movieId: ${this.currentMovie.id}) {
                        title
                        original_language
                        overview
                        poster_path
                        backdrop_path
                        popularity
                        adult
                        vote_count
                        vote_average
                        release_date
                    }}`
      const url = "https://ion-movies.herokuapp.com/";
      const opts = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query })
      };
      fetch(url, opts)
        .then(res => res.json())
        .then(res => {
          this.moviesArray = res.data.details
        })
        .catch(console.error);
    }
  },
}
</script>
