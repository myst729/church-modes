import React, { useState } from 'react'
import { Typography } from 'antd'
import './App.css'

import Keyboard from './components/Keyboard'
import Tonics, { TonicsType } from './components/Tonics'
import Modes, { ModesType } from './components/Modes'

const App = () => {
  const [tonic, setTonic] = useState<TonicsType>(TonicsType.C)
  const [mode, setMode] = useState<ModesType>(ModesType.Ionian)

  return (
    <div className="App">
      <Typography.Title>Medieval Church Modes</Typography.Title>
      <Keyboard tonic={tonic} mode={mode} />
      <Tonics defaultTonic={tonic} onTonicChange={setTonic} />
      <Modes defaultMode={mode} onModeChange={setMode} />
    </div>
  )
}

export default App
