import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jobs: [],
    searchLocation: undefined,
    searchLanguaje: undefined
  },
  mutations: {
    GET_JOBS (state, jobs) {
      state.jobs = jobs
    },
    UPDATE_LOCATION (state, msg) {
      state.searchLocation = msg
    },
    UPDATE_LANGUAJE (state, languaje) {
      state.searchLanguaje = languaje
    },
  },
  actions: {
    getJobs({commit}) {
      Axios.get('https://corsanywhere.herokuapp.com/https://jobs.github.com/positions.json')
        .then(response => {
          commit('GET_JOBS', response.data)
        })
        // state.searchLanguaje = undefined
        // state.searchLocation = undefined
    },
    getFilterJobs({commit, state}) {
      Axios.get(`https://corsanywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${state.searchLanguaje}&location=${state.searchLocation}`)
        .then(response => {
          commit('GET_JOBS', response.data)
        })
    }


  },
  modules: {
  }
})
