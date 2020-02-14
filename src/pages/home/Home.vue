<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <div>Hello Hou</div>
  </div>
</template>

<script>
import HomeHeader from './compoments/Header'
import HomeSwiper from './compoments/Swiper'
import HomeIcons from './compoments/Icons'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>

<style scoped>

</style>
