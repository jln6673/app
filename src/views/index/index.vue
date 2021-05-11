<template>
  <div>
    <headers></headers>
    <!-- banner -->
    <div class="banner">
      <van-swipe class="my-swipe"  indicator-color="white">
        <van-swipe-item class="lis" v-for="(item,index) in bannerList" :key="index">
          <img :src="item.imageUrl">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 圆形图标入口 -->
    <div class="rukou">
      <swiper class="swiper" :options="swipergo">
        <swiper-slide
        class="go"
        v-for="(item,index) in goList"
        :key="index"
        >
          <div class="yuan" @click="totop(index)">
            <div class="img">
              <span v-show="index === 0" class="day">{{day}}</span>
              <img :src="item.iconUrl">
            </div>
            <p>{{item.name}}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <!-- 分割线 -->
    <div class="fen"></div>
    <!-- 推荐歌单 -->
    <div class="tuige">
      <h3><span class="left">推荐歌单</span><van-button round class="right">更多 ></van-button></h3>
      <swiper class="swiper" :options="swipertui">
        <swiper-slide
        v-for="(item,index) in tuiList"
        :key="index"
        >
        <div class="rong">
          <img :src="item.picUrl">
          <p class="ells">{{item.name}}</p>
          <span class="play">
            <van-icon name="play" />
            {{item.playCount > 99999999 ? parseInt(item.playCount/100000000) + '亿' : item.playCount > 9999 ? parseInt(item.playCount/10000) + '万' : item.playCount}}
          </span>
        </div>
        </swiper-slide>
      </swiper>
    </div>
    <!-- 灰色地带 -->
    <div class="hui"></div>
    <!-- 排行榜 -->
    <div class="top">
      <h3><span class="left">排行榜</span><van-button round class="right">更多 ></van-button></h3>
      <swiper class="swiper" :options="swipertop">
        <swiper-slide
        v-for="(item,index) in topList"
        :key="index"
        >
          <div class="box">
            <h2>{{item.name}}</h2>
            <ul class="list">
              <li
              v-for="(val,i) in songs[index]"
              :key="i"
              >
                <img :src="val.al.picUrl">
                <div class="xiangqing">
                  <span class="biao">{{i + 1}}</span>
                  <span class="ge_name ell">{{val.al.name}}</span>
                  <span class="name ell">{{'-'+' '+val.ar[0].name}}</span>
                </div>
              </li>
            </ul>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <!-- 灰色地带 -->
    <div class="hui"></div>
    <!-- 新歌新碟 接口/personalized/newsong  limit参数-->
    <div class="new_ge">
      <h3>
        <div>
          <span :index=0 @click="newgechange()" :class="{active: flg===0}">新歌</span>
          <span class="gang">|</span>
          <span :index=1 @click="newgechange()" :class="{active: flg===1}">新碟</span>
          <span class="gang">|</span>
          <span :index=2 @click="newgechange()" :class="{active: flg===2}">数字专辑</span>
        </div>
        <van-button round class="right">更多 ></van-button>
      </h3>
      <!-- 新歌 -->
      <swiper v-show="flg===0" class="swiper" :options="swipernewsong">
        <swiper-slide
        v-for="(item,index) in 2"
        :key="index"
        >
          <div class="box">
            <ul class="list">
              <li
              v-for="(val,i) in newsong[index]"
              :key="i"
              >
                <img :src="val.picUrl">
                <div class="xiangqing">
                  <span class="ge_name ell">{{val.name}}</span>
                  <span class="name ell">{{'-'+' '+val.song.artists[0].name}}</span>
                </div>
              </li>
            </ul>
          </div>
        </swiper-slide>
      </swiper>
      <!-- 新碟 -->
      <swiper v-show="flg===1" class="swiper" :options="swipernewsong">
        <swiper-slide
        v-for="(item,index) in 2"
        :key="index"
        >
          <div class="box">
            <ul class="list">
              <li
              v-for="(val,i) in newdie[index]"
              :key="i"
              >
                <img :src="val.blurPicUrl">
                <div class="xiangqing">
                  <span class="ge_name ell">{{val.name}}</span>
                  <span class="name ell">{{'-'+' '+val.artists[0].name}}</span>
                </div>
              </li>
            </ul>
          </div>
        </swiper-slide>
      </swiper>
      <!-- 数字专辑 -->
      <swiper v-show="flg===2" class="swiper" :options="swipernewsong">
        <swiper-slide
        v-for="(item,index) in 2"
        :key="index"
        >
          <div class="box">
            <ul class="list">
              <li
              v-for="(val,i) in newnum[index]"
              :key="i"
              >
                <img :src="val.coverUrl">
                <div class="xiangqing">
                  <span class="ge_name ell">{{val.albumName}}</span>
                  <span class="name ell">{{'-'+' '+val.artistName}}</span>
                </div>
              </li>
            </ul>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
import Headers from '../components/header.vue'
export default {
  components: { Headers },
  name: 'Index',
  data () {
    return {
      flg: 0,
      newsong: [],
      newdie: [],
      newnum: [],
      songs: [], // 5个排行榜
      bannerList: '',
      goList: '',
      tuiList: [],
      topList: [],
      swipergo: {
        slidesPerView: 5,
        spaceBetween: 10,
        freeMode: true
      },
      swipertui: {
        slidesPerView: 3.2,
        spaceBetween: 10,
        freeMode: true
      },
      swipertop: {
        slidesPerView: 1
      },
      swipernewsong: {
        slidesPerView: 1
      }
    }
  },
  computed: {
    day () {
      const date = new Date()
      const days = date.getDate() >= 10 ? date.getDate() : '0' + date.getDate()
      return days
    }
  },
  methods: {
    totop (index) {
      switch (index) {
        case 3:
          this.$router.push({ name: 'topsong' })
          break
        default:
          this.$router.push({ name: 'Index' })
          break
      }
    },
    getbanner () {
      this.axios.get('/api/banner').then((res) => { // 轮播图
        // console.log(res)
        if (res.status === 200) {
          this.bannerList = res.data.banners
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    getgo () {
      this.axios.get('/api/homepage/dragon/ball').then((res) => { // 导航入口
        // console.log(res)
        if (res.status === 200) {
          this.goList = res.data.data
        }
      })
    },
    gettui () {
      this.axios.get('/api/personalized').then((res) => { // 歌单推荐
        // console.log(res)
        if (res.status === 200) {
          // this.tuiList = res.data.result
          while (this.tuiList.length < 6) {
            const num = parseInt(Math.random() * 30)
            if (this.tuiList.indexOf(res.data.result[num]) === -1) {
              this.tuiList.push(res.data.result[num])
            }
          }
        }
      })
    },
    gettop () {
      this.axios.get('/api/toplist').then((res) => { // 排行榜
        // console.log(res)
        if (res.status === 200) {
          let arr = []
          arr = res.data.list.slice(0, 6)
          arr.forEach((val, index) => {
            if (index !== 4) {
              this.topList.push(val)
            }
          })
          const arrs = this.topList
          arrs.forEach((val) => {
            this.axios.get('/api/playlist/detail?id=' + val.id).then((res) => {
              // console.log(res)
              this.songs.push(res.data.playlist.tracks.slice(0, 3))
            })
          })
        }
      })
    },
    getnewsong () {
      this.axios.get('/api/personalized/newsong?limit=6').then((res) => { // 新歌
        // console.log(res)
        if (res.status === 200) {
          this.newsong.push(res.data.result.slice(0, 3))
          this.newsong.push(res.data.result.slice(3))
        }
      })
    },
    getnewdie () {
      this.axios.get('/api/top/album?limit=30&area=ZH&type=hot').then((res) => { // 新碟
        // console.log(res)
        if (res.status === 200) {
          this.newdie.push(res.data.monthData.slice(0, 3))
          this.newdie.push(res.data.monthData.slice(3, 6))
        }
      })
    },
    getnewnum () {
      this.axios.get('/api/album/list?limit=6').then((res) => { // 数字专辑
        // console.log(res)
        if (res.status === 200) {
          this.newnum.push(res.data.products.slice(0, 3))
          this.newnum.push(res.data.products.slice(3, 6))
        }
      })
    },
    newgechange () { // 新歌新碟切换
      const e = window.event
      // console.log(e.target.attributes.index.value)
      this.flg = Number(e.target.attributes.index.value)
    }
  },
  mounted () {
    this.getbanner() // banner轮播图
    this.getgo() // 圆形入口
    this.gettui() // 推荐歌单
    this.gettop() // 排行榜
    this.getnewsong() // 新歌
    this.getnewdie() // 新碟
    this.getnewnum() // 数字专辑
  }
}
</script>
<style lang="stylus" scoped>
// 新歌
.new_ge
  h3>div>span
      font-size .4rem
      line-height 1.2rem
      color gray
    .gang
      padding 0 .16rem
    .active
      color black
      font-weight 900
  .ge_name
    margin-left .3rem
// top榜单
.top
.new_ge
  .swiper
    .box
      width 100%
      bordre 1px solid black
      background-color white
      h2
        text-align center
        line-height 1rem
        font-size .4rem
        font-weight 900
      .list
        li
          display flex
          padding .2rem 0
          img
            width 1.1rem
            border-radius .2rem
          .xiangqing
            line-height 1.1rem
            font-size .38rem
            display flex
            span
              display block
            .biao
              padding 0 .2rem
            .ge_name
              max-width 3rem
            .name
              color #898989
              margin-left .1rem
              font-size .32rem
              max-width 1.5rem
// 灰色地带
.hui
  height 0.3rem
  background #F6F6F6
  margin .2rem 0
  border-radius .2rem
// banner部分
.banner
  background: linear-gradient(to bottom,#E0E4E5,#FFFFFF);
.my-swipe
  width 90%
  margin 0 auto
  .lis
    img
      width 100%
      height 3.3rem
      border-radius .5rem
// 圆形图标入口
.rukou
  padding .3rem 0 .1rem .3rem
  .yuan
    .img
      width 1.1rem
      height 1.1rem
      background-color white
      border-radius 50%
      position relative
      .day
        position absolute
        font-size .35rem
        top .44rem
        left .34rem
        color red
      img
        width 100%
        background-color red
        border-radius 50%
  .go
    p
      text-align center
      line-height .8rem
.fen
  border-top 1px solid grey
  opacity .3
// 推荐歌单
.new_ge
.top
.tuige
  margin-left .3rem
  h3
    display flex
    justify-content space-between
    padding-right .2rem
    height 1.2rem
    .left
      font-size .45rem
      font-weight 900
      line-height 1.2rem
    .right
      height .6rem
      margin-top .3rem
  .rong
    position relative
    img
      width 100%
      border-radius .2rem
    p
      line-height .4rem
    .play
      position absolute
      padding .1rem .2rem
      background-color #000
      opacity .5
      top .1rem
      color white
      border-radius .3rem
      right .1rem
</style>
