import React, { useState, useEffect } from 'react'
import { TonicsType } from './Tonics'
import { ModesType } from './Modes'
import { getInstance } from '../common/audio'
import './Keyboard.css'

interface IKeyboardProps {
  tonic?: TonicsType;
  mode?: ModesType;
}

const Keyboard = (props: IKeyboardProps) => {
  const audio = getInstance({})
  const { tonic, mode } = props
  const [keyboardClassName, setKeyboardClassName] = useState<string>('')

  const playNote = (frequency: number) => {
    audio.tone({ frequency })
  }

  useEffect(() => {
    const tonicName = TonicsType[tonic as unknown as TonicsType]
    const modeName = ModesType[mode as unknown as ModesType]
    setKeyboardClassName(`keyboard-${tonicName}-${modeName}`.toLowerCase())
  }, [tonic, mode])

  return (
    <div className={keyboardClassName}>
      <div className="keys">
        <div className="white" onClick={() => playNote(261.63)}></div>
        <div className="black" onClick={() => playNote(277.18)} style={{ left: 40 }}></div>
        <div className="white" onClick={() => playNote(293.66)}></div>
        <div className="black" onClick={() => playNote(311.13)} style={{ left: 110 }}></div>
        <div className="white" onClick={() => playNote(329.63)}></div>
        <div className="white" onClick={() => playNote(349.23)}></div>
        <div className="black" onClick={() => playNote(369.99)} style={{ left: 220 }}></div>
        <div className="white" onClick={() => playNote(392.00)}></div>
        <div className="black" onClick={() => playNote(415.30)} style={{ left: 285 }}></div>
        <div className="white" onClick={() => playNote(440.00)}></div>
        <div className="black" onClick={() => playNote(466.16)} style={{ left: 350 }}></div>
        <div className="white" onClick={() => playNote(493.88)}></div>
        <div className="white" onClick={() => playNote(523.25)}></div>
        <div className="black" onClick={() => playNote(554.37)} style={{ left: 460 }}></div>
        <div className="white" onClick={() => playNote(587.33)}></div>
        <div className="black" onClick={() => playNote(622.25)} style={{ left: 530 }}></div>
        <div className="white" onClick={() => playNote(659.26)}></div>
        <div className="white" onClick={() => playNote(698.46)}></div>
        <div className="black" onClick={() => playNote(739.99)} style={{ left: 640 }}></div>
        <div className="white" onClick={() => playNote(783.99)}></div>
        <div className="black" onClick={() => playNote(830.61)} style={{ left: 705 }}></div>
        <div className="white" onClick={() => playNote(880.00)}></div>
        <div className="black" onClick={() => playNote(932.33)} style={{ left: 770 }}></div>
        <div className="white" onClick={() => playNote(987.77)}></div>
      </div>
    </div>
  )
}

export default Keyboard
