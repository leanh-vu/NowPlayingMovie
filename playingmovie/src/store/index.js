import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentMovieId: ''
  },
  mutations: {
    updateCurrentMovie (state, payload) {
      state.currentMovieId = payload.value
    }
  },
  actions: {
    updateCurrentMovie ({commit}, payload) {
      commit('updateCurrentMovie', {
        value: payload.value
    })
    }
  }
})
