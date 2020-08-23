<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="middle">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" />
    <home-recommend-view :recommends="recommends" />
    <home-feature-view />

    <main-tab-control
      class="tab-control"
      :titles="['流行' , '新款' , '精选']"
      @tabClick="tabClick"
    />

    <goods-list :goods="showGoods" />

  </div>
</template>


<script>
import NavBar from "components/common/navbar/NavBar"
import MainTabControl from "components/content/tabControl/MainTabControl"
import GoodsList from "components/content/goods/GoodsList"

import HomeSwiper from "./childComps/HomeSwiper"
import HomeRecommendView from "./childComps/HomeRecommendView"
import HomeFeatureView from "./childComps/HomeFeatureView"


import { getHomeMulitidata, getHomeGoods } from 'network/home'

export default {
  name: 'Home',
  components: {
    NavBar,
    MainTabControl,
    GoodsList,
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,
  },
  data () {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] },
      },
      currentType: 'pop'
    }
  },
  created () {
    this.getHomeMulitidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  computed: {
    showGoods () {
      return this.goods[this.currentType].list
    }
  },
  methods: {
    getHomeMulitidata () {
      getHomeMulitidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods (type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].page = page;
        this.goods[type].list.push(...res.data.list)
      })
    },
    tabClick (index) {
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;

      }
    }

  }

}
</script>

<style scoped>
#home {
  padding-top: 44px;
}

.home-nav {
  background: pink;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}

.tab-control {
  position: sticky;
  top: 44px;
  background: #fff;
  z-index: 999;
}
</style>