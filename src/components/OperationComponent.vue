<template>
  <div class="operation-card column flex-center q-gutter-y-md">
    <slot></slot>
    <p class="text-h6">{{ title }}</p>
  </div>
</template>
<script setup>
const props = defineProps({
  title: {
    required: true,
    type: String,
  },
});

const { title } = props;
</script>
<style lang="scss">
.operation-card {
  width: 200px;
  height: 200px;
  transition: all 0.1s ease-in;
  cursor: pointer;
  border-radius: 0.5em;
  &:hover {
    box-shadow: inset 0 0 5px #fff, inset 2px 0 8px #f0f, inset -2px 0 8px #0ff,
      inset 2px 0 30px #f0f, inset -2px 0 30px #0ff, 0 0 5px #fff,
      -1px 0 8px #f0f, 1px 0 8px #0ff;
  }
  img {
    width: 50px;
    height: 50px;
  }
}
</style>
