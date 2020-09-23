import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jobs: [],
    job: undefined,
    searchLocation: undefined,
    searchLanguaje: undefined
  },
  mutations: {
    GET_JOBS (state, jobs) {
      state.jobs = jobs
    },
    GET_JOB (state, job) {
      state.job = job
    },
    UPDATE_LOCATION (state, msg) {
      state.searchLocation = msg
    },
    UPDATE_LANGUAJE (state, languaje) {
      state.searchLanguaje = languaje
    }
  },
  actions: {
    getJobs({commit, state}) {
      Axios.get(`https://corsanywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${state.searchLanguaje}&location=${state.searchLocation}`)
        .then(response => {
          commit('GET_JOBS', response.data)
        })
        state.searchLanguaje = undefined
        state.searchLocation = undefined
    },
    // getLocation({dispatch, state }) {
    //   Axios.get('https://jobs.github.com/positions.json?page=1&location=' + state.searchLocation)
    //     .then(response => {
    //       dispatch('GET_JOBS', response.data)
    //     })
    // }

  },
  modules: {
  }
})
