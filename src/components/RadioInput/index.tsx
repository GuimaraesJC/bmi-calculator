import React from 'react'
import Text from '../Text'

import * as S from './styles'

interface RadioInputProps {
  label: string
  name: string
  checked?: boolean
}

function RadioInput({ label, name, checked }: RadioInputProps) {
  return (
    <S.Label>
      <S.Input type="radio" name={name} checked={checked} />
      <Text renderAs={React.Fragment} type="BodyM-Bold">
        {label}
      </Text>
    </S.Label>
  )
}

export default RadioInput
