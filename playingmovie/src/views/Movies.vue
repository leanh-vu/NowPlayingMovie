<template>
  <div class="container">
    <transition name='jump'>
      <div v-if='isOpeningShow' class='opening-container'>
        <div class="logo-container">
          <img src="../../public/mylogo.png" alt="Italian Trulli">
          <div class='cinema-text'>CINEMA</div>
        </div>
      </div>
    </transition>
    <transition name='slide-fade'>
      <div v-if='isTextShow' class='content-container inde-scroll scrollbar-light-blue'>
        <movie-card v-for='(v, k) in 100' v-bind:key='k'></movie-card>
      </div>
    </transition>
    <router-view/>
  </div>
  
</template>
<style scoped>
  .logo-container {
    display: flex;
    align-items: center;
    border-radius: 10px;
    font-family:Arial, Helvetica, sans-serif;
    padding: 1rem
  }
  .cinema-text {
    color: white;
    font-weight: bold;
    font-size: 70px;
    border: 5px solid;
    border-radius: 5px;
    padding: 0.2rem
  }
  .opening-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
  .jump-enter-active {
    animation: jump-in 0.5s;
  }
  .jump-leave-active {
    animation: jump-in 0.5s reverse;
  }
  @keyframes jump-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
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
  .button-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 15%;
    padding: 1em;
    background-color: rgba(255, 255, 255, .3);
    border-radius: 5px;
  }
  .content-container {
    width: 100%;
    height: 95%;
    background-color: rgba(255, 255, 255, .9);
    border-radius: 5px;
  }
  .button-fit {
    width: 100%;
  }
</style>
<script>
  import MovieCard from '../components/MovieCard.vue'
  export default {
    name: 'Body',
    data () {
      return {
        isOpeningShow: false,
        isTextShow: false,
        moviesArray: [
          {   
              "id": "521034",
              "title": "The Secret Garden",
              "poster_path": "https://image.tmdb.org/t/p/w500/5MSDwUcqnGodFTvtlLiLKK0XKS.jpg",
              "adult": false,
              "vote_average": 7.3,
              "release_date": "2020-07-08"
          },
          {   
              "id": "521034",
              "title": "The Secret Garden",
              "poster_path": "https://image.tmdb.org/t/p/w500/5MSDwUcqnGodFTvtlLiLKK0XKS.jpg",
              "adult": false,
              "vote_average": 7.3,
              "release_date": "2020-07-08"
          },
          {   
              "id": "521034",
              "title": "The Secret Garden",
              "poster_path": "https://image.tmdb.org/t/p/w500/5MSDwUcqnGodFTvtlLiLKK0XKS.jpg",
              "adult": false,
              "vote_average": 7.3,
              "release_date": "2020-07-08"
          },
          {   
              "id": "521034",
              "title": "The Secret Garden",
              "poster_path": "https://image.tmdb.org/t/p/w500/5MSDwUcqnGodFTvtlLiLKK0XKS.jpg",
              "adult": false,
              "vote_average": 7.3,
              "release_date": "2020-07-08"
          },
        ],
      }
    },
    methods: {
      displayOpening () {
        this.isOpeningShow = true
      },
      displayMovies () {
        this.isOpeningShow = false
        setTimeout(() => {
          this.isTextShow = true  
        }, 1000)
      }
    },
    mounted () {
      setTimeout(() => {
        this.displayOpening()
      }, 1000)
    },
    watch: {
      isOpeningShow: function () {
        setTimeout(() => {
          this.displayMovies()
        }, 3000)
      }
    },
    components: {
      'movie-card': MovieCard
    }
}
</script>
