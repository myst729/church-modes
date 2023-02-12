<template>
  <div class="mode-selector">
    <n-h2>
      <n-text type="primary">Modes</n-text>
    </n-h2>
    <n-space vertical>
      <n-radio-group
        name="mode"
        v-model:value="mode"
        @update:value="onModeChange"
        :disabled="props.disabled"
      >
        <n-radio-button
          v-for="item in modes"
          :key="item"
          :value="item"
          :label="item"
        />
      </n-radio-group>
      <div class="steps">
        <span
          v-for="(step, i) in steps"
          :key="i"
          class="step"
          :style="{ width: `${FRAME_CELL_WIDTH}px` }"
        >
          {{ step }}
        </span>
        <div
          class="frame"
          v-show="mode"
          :style="{ left: `${scaling}px`, width: `${frameWidth}px` }"
        ></div>
      </div>
    </n-space>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineExpose, defineProps } from 'vue'
import { NH2, NRadioButton, NRadioGroup, NSpace, NText } from 'naive-ui'
import { modes, type ModeType } from '@/common/consts'

const FRAME_CELL_WIDTH = 40
const steps = 'WWHWWWHWWHWWW'.split('')
const frameWidth = FRAME_CELL_WIDTH * 7 + 1

const emit = defineEmits<{
  (e: 'change', mode: ModeType): void
}>()

const props = defineProps<{
  disabled: boolean
}>()

const mode = ref<ModeType | null>(null)
const scaling = ref<number | null>(null)

const onModeChange = (val: ModeType) => {
  const index = modes.indexOf(val)
  scaling.value = index * FRAME_CELL_WIDTH - 1
  emit('change', val)
}

const changeMode = (val: ModeType) => {
  mode.value = val
  onModeChange(val)
}

defineExpose({
  changeMode,
})
</script>

<style scoped>
.mode-selector {
  margin-top: 30px;
}

.steps {
  display: flex;
  position: relative;
  border-left: 1px solid var(--color-border-hover);
}

.step {
  height: 30px;
  border: 1px solid var(--color-border-hover);
  border-left-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.frame {
  background: rgba(24, 160, 88, 0.16);
  border: 1px solid #18a058;
  height: 30px;
  width: 281px;
  position: absolute;
  z-index: 11;
  top: 0;
  transition: left linear 0.25s;
}
</style>
