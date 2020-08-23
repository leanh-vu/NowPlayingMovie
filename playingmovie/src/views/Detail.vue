<template>
  <div class="container">
    <div class='content-container inde-scroll scrollbar-light-blue'>
      <div>{{movieInformation.id}}</div>
      <div>{{movieInformation.title}}</div>
      <div>{{movieInformation.original_language}}</div>
      <div>{{movieInformation.overview}}</div>
      <div>{{movieInformation.poster_path}}</div>
      <div>{{movieInformation.backdrop_path}}</div>
      <div>{{movieInformation.popularity}}</div>
      <div>{{movieInformation.adult}}</div>
      <div>{{movieInformation.vote_count}}</div>
      <div>{{movieInformation.vote_average}}</div>
      <div>{{movieInformation.release_date}}</div>
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
    height: 95%;
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
    margin: 0.2rem
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
      movieInformation: {
        id: '',
        title: '',
        original_language: '',
        overview: '',
        poster_path: '',
        backdrop_path: '',
        popularity: '',
        adult: '',
        vote_count: '',
        vote_average: '',
        release_date: ''
      }
    }
  },
  computed: mapState({
    id: state => state.currentMovie.id
  }),
  watch: {
    id: function () {
      this.getMovieInformation()
    }
  },
  methods: {
    getMovieInformation () {
      const query = `{details(movieId: ${this.id}) {
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
          this.movieInformation = res.data.details
        })
        .catch(console.error);
    }
  },
  mounted () {
    this.getMovieInformation()
  }
}
</script>
