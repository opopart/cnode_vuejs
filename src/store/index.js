import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accessToken: '',
    islogin: false,
  },
  getters: {
    getislogin(state) {
      return state.islogin
    }
  },
  mutations: {
    getAccess(state, a) {
      state.accessToken = String(a);
      console.log(state.accessToken,111)
    },
    haslogin(state) {
      state.islogin = true;
    },
    haslogout(state) {
      state.islogin = false;
    }
  },
  actions: {
  },
  modules: {
  }
})
