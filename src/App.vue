<template>
  <div class="box">
    <h1>123</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    let a = [1, 2, 3];
    a.forEach((item) => {
      console.log(item);
    });
    return {};
  },
});
</script>

<style lang="scss" scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: black;
  h1 {
    color: #fff;
  }
}
</style>
