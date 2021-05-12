<template>
  <div>
    <audio :src="geturls" autoplay loop></audio>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'audioPlayer',
  computed: {
    ...mapState({ geturls: 'geturl' })
  }
}
</script>
<style lang="stylus" scoped>

</style>
