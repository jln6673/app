<template>
  <div class="full" v-if="fullshow">
    <van-icon name="arrow-left" @click="back()"/>
    全屏播放器
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'fullPlayer',
  data () {
    return {

    }
  },
  computed: {
    ...mapState({ fullshow: 'showfull' }),
    ...mapState({ getcis: 'getci' })
  },
  methods: {
    back () {
      this.$store.dispatch('off')
    }
  }
}
</script>
<style lang="stylus" scoped>
.full
  position fixed
  top 0
  bottom 0
  right 0
  left 0
  z-index 666
  background-color #95908A
</style>
