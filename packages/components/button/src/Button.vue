<template>
  <button :class="`p-button p-button--${type}`" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { buttonTypes } from './types';

defineOptions({
  name: 'PButton',
})
defineProps<{
  type?: buttonTypes;
  disabled?: boolean;
}>();
</script>
