<template>
  <div class="row q-gutter-lg">
    <OperationComponent title="Split">
      <img src="../assets/icons/split.png" alt="split-operation" />
    </OperationComponent>
    <OperationComponent title="Combine">
      <img src="../assets/icons/merge.png" alt="split-operation" />
    </OperationComponent>
  </div>
</template>
<script lang="ts">
import OperationComponent from 'src/components/OperationComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    OperationComponent,
  },
});
</script>
<style lang="scss"></style>
