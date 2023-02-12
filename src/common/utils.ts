export function enumKeys<O extends object, K extends keyof O = keyof O>(
  obj: O,
): K[] {
  return Object.keys(obj).filter((k) => Number.isNaN(+k)) as K[]
}

export const waitMs = async (n: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, n)
  })
}

export const getAudioInstance = (options: AudioContextOptions) => {
  const context = new AudioContext(options)

  return {
    playSingle: async (frequency: number = 440, value: number = 187.5) => {
      // Standard A4, Semiquaver at 80BPM
      const oscillator = context.createOscillator()
      oscillator.connect(context.destination)
      oscillator.frequency.value = frequency
      oscillator.start()
      oscillator.stop(context.currentTime + value / 1000)
      await waitMs(value + 50)
    },

    playMultiple: async (frequencies: number[], value: number = 187.5) => {
      for (let i = 0; i < frequencies.length; i++) {
        const oscillator = context.createOscillator()
        const gain = context.createGain()
        oscillator.frequency.value = frequencies[i]
        oscillator.connect(gain)
        gain.gain.value = 1 / frequencies.length
        gain.connect(context.destination)
        oscillator.start()
        oscillator.stop(context.currentTime + value / 1000)
      }
      await waitMs(value + 50)
    },
  }
}
