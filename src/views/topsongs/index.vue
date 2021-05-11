<template>
  <div>
    <div class="header">
      <van-icon name="arrow-left" @click="back()" />
      <h2>排行榜</h2>
    </div>
    <van-tabs v-model="active" swipeable>
      <van-tab class="guanfang" title="官方">
        <div class="box" v-for="(item,index) in guanfang" :key="index" @click="totopdetail(item.id, item.name)">
          <div class="left">
            <h6>{{item.name}}</h6>
            <img :src="item.coverImgUrl">
          </div>
          <div class="right">
            <p class="ell" v-for="(val,i) in item.tracks" :key="i">
              {{i+1+'.'+val.first+'-'+val.second}}
            </p>
          </div>
        </div>
      </van-tab>
      <van-tab title="推荐"></van-tab>
      <van-tab title="曲风"></van-tab>
      <van-tab title="全球"></van-tab>
      <van-tab title="MV"></van-tab>
      <van-tab title="特辑"></van-tab>
      <van-tab title="特辑"></van-tab>
      <van-tab title="特辑"></van-tab>
      <van-tab title="特辑"></van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  name: 'topsong',
  data () {
    return {
      active: '',
      list: []
    }
  },
  computed: {
    guanfang () {
      const lists = this.list.slice(0, 4)
      return lists
    }
  },
  methods: {
    totopdetail (id, name) {
      this.$router.push({ name: 'topdatail', params: { id, name } })
    },
    back () {
      this.$router.go(-1)
    },
    gettop () {
      this.axios.get('/api/toplist/detail').then((res) => { // 导航入口
        // console.log(res)
        if (res.status === 200) {
          this.list = res.data.list
        }
      })
    }
  },
  mounted () {
    this.gettop()
  }
}
</script>
<style lang="stylus" scoped>
.header
  display flex
  font-size .4rem
  font-weight 900
  padding .3rem
  h2
    margin-left .5rem
.guanfang
  padding 0 .3rem
  .box:nth-child(2n)
    background-color #E1EBED
  .box
    background-color #F6DEEB
    border-radius .3rem
    padding .4rem .3rem
    margin .4rem 0
    display flex
    .left
      h6
        font-size .35rem
        font-weight 900
        width 1.3rem
        padding .2rem 0
      img
        width 1rem
        border-radius .2rem
    .right
      p
        width 4.4rem
        line-height .65rem
        font-size .3rem
</style>
