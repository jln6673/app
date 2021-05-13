<template>
  <div>
    <h2>
      <van-icon name="arrow-left" @click="back()"/>
      <span>
        <van-icon name="search" class="seach" />
        <van-icon name="ellipsis" />
      </span>
    </h2>
    <div class="img">
      <img :src="list.coverImgUrl">
    </div>
    <div class="bo" v-if="list.tracks">
      <van-icon name="play-circle" class="i" />
      <span>播放全部</span>
      <span class="length">({{list.tracks.length}})</span>
    </div>
    <div class="list">
      <div class="li" v-for="(item,index) in list.tracks" @click="play(item.id, item.name)" :key="index">
        <span class="xuhao">{{index+1}}</span>
        <div class="names">
          <p class="name ell">{{item.name}}</p>
          <p class="ell details">{{item.ar[0].name+' - '+item.al.name}}</p>
        </div>
        <van-icon class="mv" name="play-circle-o" />
        <van-icon class="more" name="ellipsis" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'topdetail',
  data () {
    return {
      list: []
    }
  },
  methods: {
    play (id, name) {
      this.$store.dispatch('full', [id, name])
      this.$store.dispatch('getci', id)
    },
    back () {
      this.$router.go(-1)
    },
    gettopdetail () {
      const url = `/api/playlist/detail?id=${this.$route.params.id}`
      this.axios.get(url).then((res) => {
        // console.log(res)
        if (res.status === 200) {
          this.list = res.data.playlist
        }
        // console.log(this.list)
      })
    }
  },
  mounted () {
    this.gettopdetail()
  }
}
</script>
<style lang="stylus" scoped>
.bo
  padding .2rem .4rem
  font-size .35rem
  display flex
  span
    display block
    margin-top .12rem
  .length
    color grey
    font-size .3rem
    margin .13rem 0 0 .2rem
  .i
    font-size .5rem
    color red
    margin-right .2rem
.mv,.more
  font-size .5rem
  padding-top .2rem
.mv
  margin 0 .2rem
.list
  .li:nth-child(-n+3)>.xuhao
    color red
  .li
    padding .2rem .1rem
    display flex
    .xuhao
      font-size .45rem
      padding-top .2rem
      margin 0 .5rem
      margin-left .3rem
      color grey
    .names
      p
        line-height .4rem
        font-size .35rem
        width 4.4rem
      .name
        color black
        font-weight 500
      .details
        font-size .22rem
        color gray
h2
  display flex
  justify-content space-between
  font-size .6rem
  padding .3rem
  position fixed
  top 0
  width 90%
  color white
  .seach
    margin-right .3rem
.img
  img
    width 100%
    height 6rem
</style>
