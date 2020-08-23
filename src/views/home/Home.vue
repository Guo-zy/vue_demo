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
    />

    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
      <li>列表21</li>
      <li>列表22</li>
      <li>列表23</li>
      <li>列表24</li>
      <li>列表25</li>
      <li>列表26</li>
      <li>列表27</li>
      <li>列表28</li>
      <li>列表29</li>
      <li>列表30</li>
      <li>列表31</li>
      <li>列表32</li>
      <li>列表33</li>
      <li>列表34</li>
      <li>列表35</li>
      <li>列表36</li>
      <li>列表37</li>
    </ul>
  </div>
</template>


<script>
import NavBar from "components/common/navbar/NavBar"
import MainTabControl from "components/content/tabControl/MainTabControl"

import HomeSwiper from "./childComps/HomeSwiper"
import HomeRecommendView from "./childComps/HomeRecommendView"
import HomeFeatureView from "./childComps/HomeFeatureView"


import { getHomeMulitidata } from 'network/home'

export default {
  name: 'Home',
  components: {
    NavBar,
    MainTabControl,
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,
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
}
</style>