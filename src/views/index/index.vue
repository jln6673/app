<template>
  <div>
    首页
    <!-- banner -->
    <van-swipe class="my-swipe"  indicator-color="white">
      <van-swipe-item class="lis" v-for="item in bannerList" :key="item.encodeId">
        <img :src="item.imageUrl">
      </van-swipe-item>
    </van-swipe>
    <!-- 圆形图标入口 -->
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide
      v-for="item in goList"
      :key="item.id"
      >
        <div class="yuan">
          <img :src="item.iconUrl">
          <p>{{item.name}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'Index',
  data () {
    return {
      bannerList: '',
      goList: '',
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 10,
        freeMode: true
      }
    }
  },
  methods: {
    getbanner () {
      this.axios.get('/api/banner').then((res) => {
        console.log(res)
        if (res.status === 200) {
          this.bannerList = res.data.banners
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    getgo () {
      this.axios.get('/api/homepage/dragon/ball').then((res) => {
        console.log(res)
        if (res.status === 200) {
          this.goList = res.data.data
        }
      })
    }
  },
  mounted () {
    this.getbanner()
    this.getgo()
  }
}
</script>
<style lang="stylus" scoped>
.my-swipe
  width 90%
  margin 0 auto
  .lis
    img
      width 100%
      height 3.3rem
      border-radius .5rem
</style>
