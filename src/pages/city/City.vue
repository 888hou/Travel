<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <div>Hello City</div>
  </div>
</template>

<script>
import CityHeader from './compoments/Header'
import CitySearch from './compoments/Search'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>

<style scoped>

</style>
