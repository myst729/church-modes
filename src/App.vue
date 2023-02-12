<template>
  <div className="App">
    <n-h1>
      <n-text type="primary">Medieval Church Modes</n-text>
    </n-h1>
    <pitch-keyboard :tonic="tonic" :mode="mode" @start="start" @stop="stop" />
    <tonic-selector @change="selectTonic" :disabled="playing" ref="tonicRef" />
    <mode-selector @change="selectMode" :disabled="playing" ref="modeRef" />
    <preset-selector @change="selectPreset" :disabled="playing" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NH1, NText } from 'naive-ui'
import type { TonicType, ModeType } from '@/common/consts'
import PitchKeyboard from '@/components/PitchKeyboard.vue'
import TonicSelector from '@/components/TonicSelector.vue'
import ModeSelector from '@/components/ModeSelector.vue'
import PresetSelector from '@/components/PresetSelector.vue'

const tonic = ref<TonicType | null>(null)
const mode = ref<ModeType | null>(null)
const tonicRef = ref<typeof TonicSelector | null>(null)
const modeRef = ref<typeof ModeSelector | null>(null)
const playing = ref(false)

const start = () => {
  playing.value = true
}
const stop = () => {
  playing.value = false
}

const selectTonic = (val: TonicType) => {
  tonic.value = val
}

const selectMode = (val: ModeType) => {
  mode.value = val
}

const selectPreset = (val: [TonicType, ModeType]) => {
  const [t, m] = val
  tonicRef.value?.changeTone(t)
  modeRef.value?.changeMode(m)
}
</script>
