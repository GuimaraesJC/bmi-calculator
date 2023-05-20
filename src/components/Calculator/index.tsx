import Text from '../Text'
import RadioInput from '../RadioInput'

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
        Inputs
      </S.InputsContainer>
      <S.ResultContainer>
        Results
      </S.ResultContainer>
    </S.Wrapper>
  )
}

export default Calculator
