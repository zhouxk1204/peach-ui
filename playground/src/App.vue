<template>
  <div>
    <PButton @click="onclick">primary</PButton>
  </div>
</template>

<script setup lang="ts">
const onclick= () => {
  console.log('PButton click');
}
</script>
