<template>
  <div class="keyboard" :style="{ width: `${boardWidth}px` }">
    <div class="keys">
      <div
        v-for="(item, i) in noteKeys"
        :key="item.frequency"
        :class="[
          item.type,
          {
            'is-scaled': item.scaled,
            'is-playing': playing.includes(i),
          },
        ]"
        :style="item.style"
        @click="playNote(item.frequency, i)"
      >
        {{ playing.includes(i) || item.scaled ? item.label : '' }}
      </div>
    </div>
    <p>
      <n-space>
        <n-button
          type="primary"
          @click="playArpeggio"
          :disabled="!(playing.length === 0 && tonic && mode)"
        >
          <template #icon>
            <n-icon>
              <play-circle-outline />
            </n-icon>
          </template>
          Play Arpeggio
        </n-button>
        <n-button
          type="primary"
          @click="playChord"
          :disabled="!(playing.length === 0 && tonic && mode)"
        >
          <template #icon>
            <n-icon>
              <play-circle-outline />
            </n-icon>
          </template>
          Play Chord
        </n-button>
      </n-space>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { NButton, NIcon, NSpace } from 'naive-ui'
import { PlayCircleOutline } from '@vicons/ionicons5'
import {
  pitches,
  tonicInfo,
  modeInfo,
  type TonicType,
  type ModeType,
} from '@/common/consts'
import { getAudioInstance } from '@/common/utils'

const emit = defineEmits<{
  (e: 'start'): void
  (e: 'stop'): void
}>()

const props = defineProps<{
  tonic: TonicType | null
  mode: ModeType | null
}>()

const WHITE_KEY_WIDTH = 60
const BLACK_KEY_WIDTH = 30
const SCALE_AROUND = [
  'C',
  'D',
  'E',
  'F',
  'G',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'A',
  'B',
] as const
type ScaleType = (typeof SCALE_AROUND)[number]

const calculateKeyStyle = (type: string, index: number) => {
  const style = {} as any
  if (type === 'white') {
    style.width = `${WHITE_KEY_WIDTH}px`
  }
  if (type === 'black') {
    const prevWhites = pitches
      .slice(0, index)
      .filter((key) => key.type === 'white')

    style.left = `${
      prevWhites.length * WHITE_KEY_WIDTH - BLACK_KEY_WIDTH / 2
    }px`
    style.width = `${BLACK_KEY_WIDTH}px`
  }
  return style
}

const { playSingle, playMultiple } = getAudioInstance({})
const whites = pitches.filter((key) => key.type === 'white')
const boardWidth = WHITE_KEY_WIDTH * whites.length + 2

const playing = ref<number[]>([])

const noteKeys = computed(() => {
  const scaledPitches: number[] = []
  if (props.tonic && props.mode) {
    const start = tonicInfo[props.tonic as TonicType]
    const info = modeInfo[props.mode as ModeType]
    scaledPitches.push(start)
    const steps = info.split('').map((step) => +step)
    for (let i = 0; i < steps.length; i++) {
      const last = scaledPitches[scaledPitches.length - 1]
      const next = last + steps[i]
      scaledPitches.push(next)
    }
  }

  return pitches.map((item, index) => {
    const scaledIndex = scaledPitches.indexOf(index)
    const scaled = scaledIndex > -1
    const startTonic = (props.tonic as TonicType)?.[0] as TonicType
    const startIndex = SCALE_AROUND.indexOf(startTonic as ScaleType)
    const trimmedScale = SCALE_AROUND.slice(startIndex, startIndex + 8)
    const scaleTone = trimmedScale[scaledIndex]
    return {
      ...item,
      index,
      scaled,
      label: scaled ? item.notations[scaleTone] : item.natural,
      style: calculateKeyStyle(item.type, index),
    }
  })
})

const playNote = async (frequency: number, index: number) => {
  emit('start')
  playing.value = [index]
  await playSingle(frequency, 300)
  playing.value = []
  emit('stop')
}

const playNotes = async (
  notes: Array<{ frequency: number; index: number }>,
) => {
  const [{ frequency, index }, ...rest] = notes
  await playNote(frequency, index)
  await playNotes(rest)
}

const playArpeggio = async () => {
  const scaleNotes = noteKeys.value.filter((noteKey) => noteKey.scaled)
  await playNotes(scaleNotes)
}

const playChord = async () => {
  const scaleNotes = noteKeys.value.filter((noteKey) => noteKey.scaled)
  const frequencies = scaleNotes.map((note) => note.frequency)
  const indices = scaleNotes.map((note) => note.index)
  emit('start')
  playing.value = [...indices]
  await playMultiple(frequencies, 500)
  playing.value = []
  emit('stop')
}
</script>

<style scoped>
.keys {
  font-size: 16px;
  font-weight: bold;
  border: 1px solid #000;
  border-top-width: 2px;
  display: flex;
  position: relative;
}

.white {
  background: #fff;
  color: #333;
  height: 240px;
  border: 1px solid black;
  border-top-width: 0;
  padding-bottom: 20px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.white.is-scaled {
  background: #ccc;
}

.black {
  background: #000;
  color: #eee;
  height: 160px;
  border: 2px solid black;
  border-top-width: 0;
  padding-top: 20px;
  text-align: center;
  position: absolute;
  z-index: 10;
  top: 0;
}

.black.is-scaled {
  background: #666;
}

.is-playing {
  background: #87f6aa !important;
  color: #333 !important;
}
</style>
