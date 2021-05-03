import React, { useState } from 'react'
import { Radio, Typography } from 'antd'
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
  defaultTonic?: TonicsType;
  onTonicChange: (v: TonicsType) => void;
}

const Tonics = (props: ITonicsProps) => {
  const {
    defaultTonic = TonicsType.C,
    onTonicChange
  } = props

  const [tonic, setTonic] = useState<TonicsType>(defaultTonic)

  const onChange = (e: any) => {
    const val = e.target.value
    setTonic(val)
    onTonicChange(val)
  }

  const options = enumKeys(TonicsType).map((key: string) => ({
    label: key,
    value: TonicsType[key as unknown as TonicsType],
  }))

  return (
    <div className="tonics" style={{ marginTop: 20 }}>
      <Typography.Title level={2}>Tonic</Typography.Title>
      <div>
        <Radio.Group
          value={tonic}
          options={options}
          onChange={onChange}
          optionType="button"
          buttonStyle="solid"
        />
      </div>
    </div>
  )
}

export default Tonics
