import React, { useState, useEffect } from 'react'
import { Radio, RadioChangeEvent, Typography } from 'antd'
import { enumKeys } from '../common/utils'
import './Modes.css'

export enum ModesType {
  Ionian = 1,
  Dorian,
  Phrygian,
  Lydian,
  Mixolydian,
  Aeolian,
  Locrian,
}

interface IModesProps {
  mode?: ModesType;
  onChange?: (v: ModesType) => void;
}

const Modes = (props: IModesProps) => {
  const {
    mode = ModesType.Ionian,
    onChange
  } = props

  const [scaling, setScaling] = useState<number>(0)

  const onModeChange = (e: RadioChangeEvent) => {
    onChange && onChange(e.target.value)
  }

  useEffect(() => {
    setScaling((mode - 1) * 40)
  }, [mode])

  const options = enumKeys(ModesType).map((key: string) => ({
    label: key,
    value: ModesType[key as unknown as ModesType],
  }))

  return (
    <div className="modes" style={{ marginTop: 30 }}>
      <Typography.Title level={2}>Mode</Typography.Title>
      <div>
        <Radio.Group
          value={mode}
          options={options}
          onChange={onModeChange}
          optionType="button"
          buttonStyle="solid"
        />
      </div>
      <div className="steps">
        {'WWHWWWHWWHWWW'.split('').map((s: string, i: number) => (
          <span className="step" key={i}>{s}</span>
        ))}
        <div className="frame" style={{ left: scaling }} />
      </div>
    </div>
  )
}

export default Modes
