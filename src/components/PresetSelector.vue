<template>
  <div class="preset-selector">
    <n-h2>
      <n-text type="primary">Presets</n-text>
    </n-h2>
    <n-button-group>
      <n-button
        v-for="item in presets"
        :key="item[0]"
        @click="selectPreset([...item])"
        :disabled="props.disabled"
      >
        {{ item.join(' ') }}
      </n-button>
    </n-button-group>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'
import { NH2, NButton, NButtonGroup, NText } from 'naive-ui'
import { presets, type TonicType, type ModeType } from '@/common/consts'

const emit = defineEmits<{
  (e: 'change', preset: [TonicType, ModeType]): void
}>()

const props = defineProps<{
  disabled: boolean
}>()

const selectPreset = (val: [TonicType, ModeType]) => {
  const [tonic, mode] = val
  emit('change', [tonic, mode])
}
</script>

<style scoped>
.preset-selector {
  margin-top: 30px;
}
</style>
