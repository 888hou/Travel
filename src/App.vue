<template>
  <div id="app">
    <!--当先路由对应的内容 exclude组件名 取消组件缓存-->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
