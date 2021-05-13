<template>
  <div @click="blockfull()" class="min" v-if="minshow">
    小播放器
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'minPlayer',
  data () {
    return {

    }
  },
  computed: {
    ...mapState({
      minshow: 'minshow'
    })
  },
  methods: {
    ...mapMutations(['blockfull'])
  }
}
</script>
<style lang="stylus" scoped>
.min
  position fixed
  bottom 0
  left 0
  right 0
  height 3rem
  background-color red
</style>
