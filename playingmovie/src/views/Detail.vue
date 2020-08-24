<template>
  <div class="container">
    <div class='content-container inde-scroll scrollbar'>
      <div class="image-container" 
           v-bind:style="{ 'background-image': 'url(' + movieInformation.backdrop_path + ')' }">
           <img class='image' :alt="movieInformation.title" :src="movieInformation.poster_path">
            <h1 class='title'>{{movieInformation.title}}</h1>
      </div>
      <div class='info-container'>
        <div class='info-up'>
          <div class='w-h'>
            <strong>Language: </strong>
            <span class='upper'>{{movieInformation.original_language}}</span>
          </div>
          <div v-if='movieInformation.adult' class='w-h adult'>18+</div>
          <div class='w-h'><strong>Vote:</strong>  {{movieInformation.vote_average + ' (' + movieInformation.vote_count + ' votes)'}}</div>
          <div class='w-h'><strong>Release date:</strong>  {{movieInformation.release_date}}</div>
        </div>
        <div class='info-down'>
          <div>{{movieInformation.overview}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .scrollbar::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.1);
    background-color: #F5F5F5;
    border-radius: 5px; 
    }

  .scrollbar::-webkit-scrollbar {
    width: 9px;
    background-color: #F5F5F5; 
    }

  .scrollbar::-webkit-scrollbar-thumb {
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
    align-items: center;
  }
  .content-container {
    width: 100%;
    height: 95%;
    background-color: rgba(255, 255, 255, .9);
    border-radius: 5px;
    margin: 0.2rem
  }
  .image-container {
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    widows: 100%;
    height: 20vh;
    position: relative;
    transition: all 1s;
  }
  .image {
    opacity: 1;
    display: block;
    height: 25vh;
    transition: .5s ease;
    backface-visibility: hidden;
    border-radius: 10px;
    position: absolute;
    top: 20%;
    left: 5%;
    border: 1rem white solid;
  }
  .title {
    position: absolute;
    top: 100%;
    left: 20%;
    color: #ff5722;
  }
  .image:hover {
    box-shadow: 2px 2px #9e9e9e;
    height:28vh
  }
  .info-container {
    margin-top: 12vh;
    padding: 1.5rem;
    font-size: 1.5em;
  }
  .info-up {
    display: flex;
    flex-wrap: wrap;
  }
  .w-h {
    width: 40vw;
  }
  .adult {
    color: red;
    font-weight: bold;
  }
  .info-down {
    margin-top: 1rem
  }
  .upper {
    text-transform: uppercase;
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
        adult: '',
        vote_count: '',
        vote_average: '',
        release_date: ''
      }
    }
  },
  computed: mapState({
    id: state => state.currentMovieId
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
