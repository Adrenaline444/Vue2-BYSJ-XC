<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.push({name: 'index_serve'})
    },
  }
}
</script>

<template>
  <div class="wm">
    <van-sticky>
      <div class="header">
        <van-nav-bar
            title="校园订餐服务"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
      </div>
    </van-sticky>

  </div>
</template>


<style scoped lang="scss">

</style>