<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
    <div>Hello City</div>
  </div>
</template>

<script>
import CityHeader from './compoments/Header'
import CitySearch from './compoments/Search'
import CityList from './compoments/List'
import CityAlphabet from './compoments/Alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  }
}
</script>

<style scoped>

</style>
