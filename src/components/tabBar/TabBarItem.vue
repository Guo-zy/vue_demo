<template>
  <div
    class="tab-bar-item"
    @click="handleClick"
  >
    <div v-if="isActive">
      <slot name="img-active"></slot>
    </div>
    <div v-else>
      <slot name="img-default"></slot>
    </div>
    <div :class="{active:isActive}">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: {
      type: String,
      default: "/home"
    },
  },
  computed: {
    isActive () {
      return this.path.indexOf(this.$route.path) !== -1
    }
  },
  data () {
    return {

    }
  },
  methods: {
    handleClick () {
      this.$router.push(this.path)
    }
  },
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.tab-bar-item img {
  vertical-align: middle;
  width: 24px;
  height: 24px;
}
.active {
  color: red;
}
</style>