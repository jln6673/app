import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showfull: false,
    geturl: '',
    getci: ''
  },
  actions: {
    full (ctx, id) {
      const kai = true
      ctx.commit('change', kai)
      axios.get('/api/song/url?id=' + id).then((res) => {
        console.log(res)
        ctx.commit('url', res)
      })
      axios.get('/api/lyric?id=' + id).then((res) => {
        console.log(res)
        ctx.commit('ci', res)
      })
    },
    off (ctx) {
      const guan = false
      ctx.commit('offs', guan)
    }
  },
  mutations: {
    offs (state, guan) {
      state.showfull = guan
    },
    change (state, kai) {
      state.showfull = kai
    },
    url (state, result) {
      state.geturl = result.data.data[0].url
    },
    ci (state, result) {
      state.getci = result.data.lrc.lyric
    }
  },
  modules: {
  }
})
