<template>
  <div>
    <headers></headers>
    <!-- banner -->
    <div class="banner">
      <van-swipe class="my-swipe"  indicator-color="white">
        <van-swipe-item class="lis" v-for="item in bannerList" :key="item.encodeId">
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
          <div class="yuan">
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
      <h3><span class="left">推荐歌单</span><van-button round class="right">更多 ></van-button></h3>
      <swiper class="swiper" :options="swipertop">
        <swiper-slide
        v-for="(item,index) in topList"
        :key="index"
        >
          <div class="box">{{item.name}}</div>
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
        slidesPerView: 1.2,
        spaceBetween: 10
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
      this.axios.get('/api/personalized').then((res) => { // 导航入口
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
      this.axios.get('/api/toplist').then((res) => { // 导航入口
        console.log(res)
        if (res.status === 200) {
          let arr = []
          arr = res.data.list.slice(0, 6)
          arr.forEach((val, index) => {
            if (index !== 4) {
              this.topList.push(val)
            }
          })
        }
      })
    }
  },
  mounted () {
    this.getbanner()
    this.getgo()
    this.gettui()
    this.gettop()
  }
}
</script>
<style lang="stylus" scoped>
// top榜单
.top
  .swiper
    background-color #F6F6F6
    .box
      width 100%
      bordre 1px solid black
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
