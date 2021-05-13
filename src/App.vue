<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <full-player></full-player>
    <min-player></min-player>
    <audio-play></audio-play>
  </div>
</template>
<script>
import audioPlay from './views/components/audioPlay.vue'
import fullPlayer from './views/components/fullPlayer.vue'
import minPlayer from './views/components/minPlayer.vue'
export default {
  name: 'App',
  components: { fullPlayer, audioPlay, minPlayer }
}
</script>
<style lang="stylus">

</style>
