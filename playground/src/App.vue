<template>
  <div>
    <PButton @click="onclick">click me!</PButton>
  </div>
</template>

<script setup lang="ts">
import { PButton } from 'peach-design';
const onclick= () => {
  console.log('PButton onclick');
}
</script>
