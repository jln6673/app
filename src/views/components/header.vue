<template>
  <div class="header">
    <van-row>
      <van-col class="icon" span="3">
        <van-icon name="wap-nav" />
      </van-col>
      <van-col span="18">
        <van-search
          class="search"
          v-model="value"
          shape="round"
          background="#E0E4E5"
          placeholder="请输入搜索关键词"
        />
      </van-col>
      <van-col class="icon" span="3">
        <van-icon name="music" />
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  // name: 'headers'
  data () {
    return {
      value: ''
    }
  }
}
</script>
<style lang="stylus" scoped>
.header
  background-color #E0E4E5
  box-sizing border-box
  .search
    padding .2rem .06rem
  .icon
    font-size .6rem
    text-align center
    line-height 1.25rem
</style>
