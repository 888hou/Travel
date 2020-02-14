<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <div>Hello Hou</div>
  </div>
</template>

<script>
import HomeHeader from './compoments/Header'
import HomeSwiper from './compoments/Swiper'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style scoped>

</style>
