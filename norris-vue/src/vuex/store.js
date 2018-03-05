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

const getters = {
  orderedJokes: state => {
    console.log('im getting the jokes from the store')
    return state.jokeList.reverse()
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
