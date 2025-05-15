<template>
  <div>
    <PButton @click="onclick">click me!</PButton>
  </div>
</template>

<script setup lang="ts">
import { PButton } from 'peach-ui';
const onclick= () => {
  console.log('PButton onclick');
}
</script>
