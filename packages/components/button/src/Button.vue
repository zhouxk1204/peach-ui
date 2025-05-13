<template>
  <button class="peach-button"><slot></slot></button>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'PButton',
})
</script>

<style scoped>
.peach-button {
  padding: 10px 20px;
  background-color: #ff9b9b;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
}

.peach-button:hover {
  background-color: #ff7a7a;
}
</style>
