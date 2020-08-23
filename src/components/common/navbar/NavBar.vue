<template>
  <div class="nav-bar">
    <div class='left'>
      <slot name="left"></slot>
    </div>
    <div class="middle">
      <slot name="middle"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 44px;
}
.left {
  width: 60px;
  background-color: red;
}
.middle {
  flex: 1;
  background-color: black;
}
.right {
  background-color: red;
  width: 60px;
}
</style>