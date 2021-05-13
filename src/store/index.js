import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showfull: false,
    minshow: false,
    mp3infor: {
      name: '',
      mp3: {},
      ci: '',
      play: false
    }
    // geturl: '' // mp3
    // getci: '' // 歌词
  },
  actions: {
    full (ctx, [id, name]) {
      axios.get('/api/song/url?id=' + id).then((res) => {
        // console.log(res)
        ctx.commit('url', [res, name])
      })
    },
    getci (ctx, id) {
      axios.get('/api/lyric?id=' + id).then((res) => {
        // console.log(res)
        ctx.commit('ci', res)
      })
    }
  },
  mutations: {
    blockfull (state) {
      state.showfull = true
      state.minshow = false
    },
    off (state) {
      state.showfull = false
      state.minshow = true
    },
    url (state, result) {
      state.showfull = true // 打开全屏播放器
      state.mp3infor.mp3 = result[0].data.data[0]
      // state.geturl = result.data.data[0].url
      state.mp3infor.play = true
      state.mp3infor.name = result[1]
    },
    ci (state, result) {
      state.mp3infor.ci = result.data.lrc.lyric
    }
  },
  modules: {
  }
})
