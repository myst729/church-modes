<template>
  <div class="tonic-selector">
    <n-h2>
      <n-text type="primary">Tonics</n-text>
    </n-h2>
    <n-radio-group
      name="tonic"
      v-model:value="tonic"
      @update:value="onToneChange"
      :disabled="props.disabled"
    >
      <n-radio-button
        v-for="item in tonics"
        :key="item"
        :value="item"
        :label="item"
      />
    </n-radio-group>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineExpose, defineProps } from 'vue'
import { NH2, NRadioButton, NRadioGroup, NText } from 'naive-ui'
import { tonics, type TonicType } from '@/common/consts'

const emit = defineEmits<{
  (e: 'change', mode: TonicType): void
}>()

const props = defineProps<{
  disabled: boolean
}>()

const tonic = ref<TonicType | null>(null)

const onToneChange = (val: TonicType) => {
  emit('change', val)
}

const changeTone = (val: TonicType) => {
  tonic.value = val
  onToneChange(val)
}

defineExpose({
  changeTone,
})
</script>

<style scoped>
.tonic-selector {
  margin-top: 30px;
}
</style>
