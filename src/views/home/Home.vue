<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="middle">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" />
    <home-recommend-view :recommends="recommends" />
  </div>
</template>


<script>
import NavBar from "components/common/navbar/NavBar"
import HomeSwiper from "./childComps/HomeSwiper"
import HomeRecommendView from "./childComps/HomeRecommendView"
import { getHomeMulitidata } from 'network/home'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView
  },
  data () {
    return {
      banners: [],
      recommends: []
    }
  },
  created () {
    getHomeMulitidata().then(res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  },

}
</script>

<style scoped>
.home-nav {
  background: pink;
  color: #fff;
}
</style>