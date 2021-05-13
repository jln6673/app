<template>
  <div class="full" v-if="fullshow">
    <van-icon name="arrow-left" @click="off()"/>
    <span>{{name.name}}</span>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'fullPlayer',
  data () {
    return {

    }
  },
  computed: {
    ...mapState({
      fullshow: 'showfull',
      name: 'mp3infor'
    })
  },
  methods: {
    // back () {
    //   this.$store.dispatch('off')
    // }
    ...mapMutations(['off'])
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
