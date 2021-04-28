<template>
  <div>
    首页
  </div>
</template>
<script>
export default {
  name: 'Index',
  methods: {
    getdata () {
      this.axios.get('').then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
