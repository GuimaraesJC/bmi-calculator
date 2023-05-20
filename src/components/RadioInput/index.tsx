import React from 'react'
import Text from '../Text'

import * as S from './styles'

interface RadioInputProps {
  label: string;
  name: string;
}

function RadioInput({ label, name }: RadioInputProps) {
  return (
    <S.Label>
      <S.Input type="radio" name={name} />
      <Text renderAs={React.Fragment} type="BodyM-Bold">
        {label}
      </Text>
    </S.Label>
  )
}

export default RadioInput
