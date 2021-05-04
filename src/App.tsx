import React, { useState } from 'react'
import { Typography } from 'antd'
import './App.css'

import Keyboard from './components/Keyboard'
import Tonics, { TonicsType } from './components/Tonics'
import Modes, { ModesType } from './components/Modes'
import Presets from './components/Presets'

const App = () => {
  const [tonic, setTonic] = useState<TonicsType>(TonicsType.C)
  const [mode, setMode] = useState<ModesType>(ModesType.Ionian)
  
  const onPresetSelect = (combination: [TonicsType, ModesType]) => {
    const [tonic, mode] = combination
    setTonic(tonic)
    setMode(mode)
  }

  return (
    <div className="App">
      <Typography.Title>Medieval Church Modes</Typography.Title>
      <Keyboard tonic={tonic} mode={mode} />
      <Tonics tonic={tonic} onChange={setTonic} />
      <Modes mode={mode} onChange={setMode} />
      <Presets onChange={onPresetSelect} />
    </div>
  )
}

export default App
