<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="middle">购物街</div>
    </nav-bar>
    <h1>Home</h1>
  </div>
</template>


<script>
import NavBar from "components/common/navbar/NavBar"
export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>

<style scoped>
.home-nav {
  background: pink;
  color: #fff;
}
</style>