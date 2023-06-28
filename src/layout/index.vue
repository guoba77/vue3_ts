<template>
  <div class="layout">
    <div class="latout_sideBar">
      <Logo />
    </div>
    <div class="right">
      <div class="latout_tabBar"></div>
      <div class="latout_main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import Logo from './logo/index.vue'
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  width: 100%;
  height: 100vh;
  // background-color: chartreuse;
  .latout_sideBar {
    height: 100vh;
    width: $sideWith;
    background-color: $sideBgcolor;
  }
  .right {
    width: calc(100% - $sideWith);
    height: 100vh;
    .latout_tabBar {
      width: 100%;
      height: $tabBarHeight;
      background-color: aquamarine;
    }
    .latout_main {
      overflow: auto;
      padding: 20px;
      width: 100%;
      height: calc(100% - $tabBarHeight);
      background-color: saddlebrown;
    }
  }
}
</style>
