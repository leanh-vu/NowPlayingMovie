import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentMovie: {
      id: '',
      title: '',
      language: '',
      posterPath: '',
      overView: '',
      backdrop: '',
      adult: '',
      voteCount: '',
      voteAverage: '',
      releaseDay: '',
    }
  },
  mutations: {
    updateCurrentMovie (state, payload) {
      state.currentMovie[payload.fieldName] = payload.value
    }
  },
  actions: {
    updateCurrentMovie ({commit}, payload) {
      commit('updateCurrentMovie', {
        fieldName: payload.fieldName,
        value: payload.value
    })
    }
  }
})
