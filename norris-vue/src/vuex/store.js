import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  jokeList: []
}

const mutations = {
  addJoke (state, joke) {
    state.jokeList.push(joke)
  }
}

export default new Vuex.Store({
  state,
  mutations
})
