import React from 'react'
import { Button, Typography } from 'antd'
import { TonicsType } from './Tonics'
import { ModesType } from './Modes'

interface IPresetsProps {
  onChange?: (v: [TonicsType, ModesType]) => void;
}

const Presets = (props: IPresetsProps) => {
  const { onChange } = props

  const presets: [TonicsType, ModesType][] = [
    [TonicsType.C, ModesType.Ionian],
    [TonicsType.D, ModesType.Dorian],
    [TonicsType.E, ModesType.Phrygian],
    [TonicsType.F, ModesType.Lydian],
    [TonicsType.G, ModesType.Mixolydian],
    [TonicsType.A, ModesType.Aeolian],
    [TonicsType.B, ModesType.Locrian],
  ]

  const onPresetChange = (val: [TonicsType, ModesType]) => {
    const [tonic, mode] = val
    onChange && onChange([tonic, mode])
  }

  return (
    <div className="presets" style={{ marginTop: 30 }}>
      <Typography.Title level={2}>Presets</Typography.Title>
      <div>
        <Button.Group>
          {presets.map((preset: [TonicsType, ModesType], i: number) => {
            const [tonic, mode] = preset
            const tonicName = TonicsType[tonic as unknown as TonicsType]
            const modeName = ModesType[mode as unknown as ModesType]
            return (
              <Button onClick={() => onPresetChange(preset)} key={i}>
                {`${tonicName} ${modeName}`}
              </Button>
            )
          })}
        </Button.Group>
      </div>
    </div>
  )
}

export default Presets
