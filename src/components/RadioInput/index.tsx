import React from 'react'
import Text from '../Text'

import * as S from './styles'

interface RadioInputProps {
  label: string
  name: string
  onChange: () => void
  defaultChecked?: boolean
}

function RadioInput(
  {
    label,
    name,
    onChange,
    defaultChecked,
  }: RadioInputProps
) {
  return (
    <S.Label>
      <S.Input
        type="radio"
        name={name}
        onChange={onChange}
        defaultChecked={defaultChecked}
      />
      <Text renderAs={React.Fragment} type="BodyM-Bold">
        {label}
      </Text>
    </S.Label>
  )
}

export default RadioInput
