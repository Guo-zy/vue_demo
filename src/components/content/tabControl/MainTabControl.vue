<template>
  <div class="tab-control">
    <div
      v-for="(item,index) in titles"
      :key="index"
      class="tab-control-item"
      :class="{active : index === currentIndex}"
      @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainTabControl",
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    },
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick (index) {
      this.currentIndex = index
    }
  },
}
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 44px;
  line-height: 44px;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 7px;
}
.active span {
  color: #f40;
  border-bottom: 2px solid #f40;
}
</style>