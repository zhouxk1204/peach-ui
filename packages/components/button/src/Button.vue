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
const props = withDefaults(defineProps<{
  type?: buttonTypes;
  disabled?: boolean;
}>(), {
  type: 'primary',
  disabled: false,
});
console.log("%c Line:14 🥐 props", "color:#fca650", props);
</script>
