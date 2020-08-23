<template>
  <div class='movie-card'>
    <div class="z">
      <img class='image' :alt="movieInfo.title" :src="movieInfo.poster_path" style="width:100%">
      <div class="middle">
        <div class="text">{{movieInfo.title}}</div>
        <div class="text">{{movieInfo.vote_average}}</div>
        <router-link class='link' to="/detail">
            <div class='button button-orange' @click="test">Watch now!</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .z {
    position: relative;
    width: 100%;
    }

  .image {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;
      border-radius: 10px;
  }

  .middle {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
    width: 15vw;
    min-width: 150px;
  }

  .z:hover .image {
    /* background-color: rgba(0, 0, 0, 0.2); */
    box-shadow: 10px 10px grey;
  }

  .z:hover .middle {
    opacity: 1;
  }

  .text {
    background-color: black;
    opacity: 0.8;
    color: white;
    font-size: 1.5em;
    text-transform: uppercase;
  }
  .movie-card {
    display: flex;
    flex-direction: column;
    width: 15vw;
    margin: 2vw;
    min-width: 150px;
  }
  .button {
    padding: 1rem 1.5rem;
    font-size: 1em;
    border-radius: 5px;
    color: white;
    text-transform: uppercase;
    transition: background-color 0.2s;
    transition-timing-function: ease-out;
    
  }
  .link {
    text-decoration: none;
  }
  .button-orange {
    border: 1px #ffa06d solid;
    background-color: #ff6e40;
  }
  .button-orange:hover {
    border: #c53d13 1px solid;
    background-color: #c53d13
  }
  .button-orange:focus {
    outline:none;
    background-color: #c53d13;
}
</style>
<script>

export default {
  props: ['movieInfo'],
  components: {
  },
  methods: {
    test () {
      this.$store.dispatch('updateCurrentMovie', {
        fieldName: 'id',
        value: this.movieInfo.id,
    })
    }
  }
}
</script>
