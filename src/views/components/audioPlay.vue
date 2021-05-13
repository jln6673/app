<template>
  <div v-if="mp3infor.play">
    <audio :src="mp3infor.mp3.url" autoplay loop></audio>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'audioPlayer',
  computed: {
    ...mapState({ mp3infor: 'mp3infor' })
  }
}
</script>
<style lang="stylus" scoped>

</style>
