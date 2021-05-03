interface IAudioTone {
  frequency?: number;
  value?: number;
}

export const getInstance = (options: AudioContextOptions) => {
  const context = new AudioContext(options)

  return {
    tone: ({frequency = 440, value = 187.5}: IAudioTone) => {
      // Standard A4, Semiquaver at 80BPM
      const oscillator = context.createOscillator()
      oscillator.connect(context.destination)
      oscillator.frequency.value = frequency
      oscillator.start()
      oscillator.stop(context.currentTime + value/1000)
    }
  }
}
