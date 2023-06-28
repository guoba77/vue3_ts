<template>
  <div class="logo">
    <div class="img"></div>
    <p>魔神锅巴</p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.logo {
  width: 100%;
  height: 50px;
  background-color: #fff;
  display: flex;
  align-items: center;
  .img {
    width: 50px;
    height: 50px;
    background: url('@/assets/images/logo.png');
    background-size: 100% 100%;
  }
  p {
    margin-left: 30px;
    font-size: 25px;
    font-weight: bold;
    color: #000;
  }
}
</style>
