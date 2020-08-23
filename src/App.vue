<template>
  <div>
    <main-tab-bar />
    <router-view />
  </div>
</template>

<script>
import MainTabBar from "./components/MainTabBar"
export default {
  name: '',
  components: {
    MainTabBar
  }
}
</script>

<style scoped>
@import url("./assets/css/base.css");
</style>