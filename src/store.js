import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dark: false,
    primaryDrawer: {
      model: null,
      type: 'default',
      clipped: false,
      floating: false,
      mini: false
    },
    footer: {
      inset: true
    }
  },
  mutations: {

  },
  actions: {

  }
})
