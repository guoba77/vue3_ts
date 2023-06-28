<template>
  <svg :style="{ width: size + 'px', height: size + 'px' }">
    <use :fill="color" :xlink:href="'#icon-' + name"></use>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    name: {
      type: String,
    },
    size: {
      type: Number,
    },
    color: {
      type: String,
    },
  },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
