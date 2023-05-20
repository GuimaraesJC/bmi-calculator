import Text from '../Text'
import RadioInput from '../RadioInput'
import Input from '../Input'

import * as S from './styles'

function Calculator() {
  return (
    <S.Wrapper>
      <Text renderAs="span" type="HeadingM">
        Enter your details below
      </Text>
      <S.UnitSelectionContainer>
        <RadioInput label="Metric" name="system" checked />
        <RadioInput label="Imperial" name="system" />
      </S.UnitSelectionContainer>
      <S.InputsContainer>
        <Input label="Height" unit="cm" />
        <Input label="Weight" unit="kg" />
      </S.InputsContainer>
      <S.ResultContainer>
        Results
      </S.ResultContainer>
    </S.Wrapper>
  )
}

export default Calculator
