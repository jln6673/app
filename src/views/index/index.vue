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
      <swiper class="swiper" :options="swipertui">
        <swiper-slide
        v-for="(item,index) in tuiList.slice(0, 6)"
        :key="index"
        >
        <div class="rong">
          <img :src="item.picUrl">
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
      bannerList: '',
      goList: '',
      day: '',
      tuiList: '',
      swipergo: {
        slidesPerView: 5,
        spaceBetween: 10,
        freeMode: true
      },
      swipertui: {
        slidesPerView: 3.5,
        spaceBetween: 10,
        freeMode: true
      }
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
      this.axios.get('/api//personalized/newsong').then((res) => { // 导航入口
        console.log(res)
        if (res.status === 200) {
          this.tuiList = res.data.result
        }
      })
    }
  },
  mounted () {
    this.getbanner()
    this.getgo()
    const date = new Date()
    this.day = date.getDate() >= 10 ? date.getDate() : '0' + date.getDate()
    // console.log(this.day)
    this.gettui()
  }
}
</script>
<style lang="stylus" scoped>
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
.tuige
  margin-left .3rem
  .rong
    img
      width 100%
</style>
