import React from 'react'
import Text from '../Text'

import * as S from './styles'

interface RadioInputProps {
  label: string
  name: string
  onClick: () => void
  defaultChecked?: boolean
}

function RadioInput(
  {
    label,
    name,
    onClick,
    defaultChecked,
  }: RadioInputProps
) {
  return (
    <S.Label>
      <S.Input
        type="radio"
        name={name}
        onClick={onClick}
        defaultChecked={defaultChecked}
      />
      <Text renderAs={React.Fragment} type="BodyM-Bold">
        {label}
      </Text>
    </S.Label>
  )
}

export default RadioInput
