<template>
  <div>
    <Header />
    <nuxt />
    <CanvasBg />
  </div>
</template>

<script>
import Header from '~/components/Header';
import CanvasBg from '~/components/CanvasBg';
export default {
  components: {
    Header, CanvasBg
  }
}
</script>

<style lang="less">

</style>
