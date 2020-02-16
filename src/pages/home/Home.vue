<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
    <div>Hello Hou</div>
  </div>
</template>

<script>
import HomeHeader from './compoments/Header'
import HomeSwiper from './compoments/Swiper'
import HomeIcons from './compoments/Icons'
import HomeRecommend from './compoments/Recommend'
import HomeWeekend from './compoments/Weekend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>

<style scoped>

</style>
