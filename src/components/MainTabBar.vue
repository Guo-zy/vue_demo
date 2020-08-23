<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img
        slot="img-active"
        src="../assets/tabBar/true.png"
        alt=""
      >
      <img
        slot="img-default"
        src="../assets/tabBar/car.png"
        alt=""
      >
      <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img
        slot="img-active"
        src="../assets/tabBar/true.png"
        alt=""
      >
      <img
        slot="img-default"
        src="../assets/tabBar/car.png"
        alt=""
      >
      <div slot="text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img
        slot="img-active"
        src="../assets/tabBar/true.png"
        alt=""
      >
      <img
        slot="img-default"
        src="../assets/tabBar/car.png"
        alt=""
      >
      <div slot="text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img
        slot="img-active"
        src="../assets/tabBar/true.png"
        alt=""
      >
      <img
        slot="img-default"
        src="../assets/tabBar/car.png"
        alt=""
      >
      <div slot="text">我的</div>
    </tab-bar-item>

  </tab-bar>
</template>

<script>
import TabBar from "./tabBar/TabBar"
import TabBarItem from "./tabBar/TabBarItem"
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>


<style scoped>
</style>
