import React from 'react'
import { Radio, RadioChangeEvent, Typography } from 'antd'
import { enumKeys } from '../common/utils'

export enum TonicsType {
  C = 1,
  D,
  E,
  F,
  G,
  A,
  B,
}

interface ITonicsProps {
  tonic?: TonicsType;
  onChange?: (v: TonicsType) => void;
}

const Tonics = (props: ITonicsProps) => {
  const {
    tonic = TonicsType.C,
    onChange
  } = props

  const options = enumKeys(TonicsType).map((key: string) => ({
    label: key,
    value: TonicsType[key as unknown as TonicsType],
  }))

  const onTonicChange = (e: RadioChangeEvent) => {
    onChange && onChange(e.target.value)
  }

  return (
    <div className="tonics" style={{ marginTop: 30 }}>
      <Typography.Title level={2}>Tonic</Typography.Title>
      <div>
        <Radio.Group
          value={tonic}
          options={options}
          onChange={onTonicChange}
          optionType="button"
          buttonStyle="solid"
        />
      </div>
    </div>
  )
}

export default Tonics
