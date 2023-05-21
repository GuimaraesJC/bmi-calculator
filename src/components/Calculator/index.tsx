import { useState } from 'react'

import Text from '../Text'
import RadioInput from '../RadioInput'
import Input from '../Input'

import * as S from './styles'

function Calculator() {
  const [isMetric, setIsMetric] = useState<boolean>(true);

  return (
    <S.Wrapper>
      <Text renderAs="span" type="HeadingM">
        Enter your details below
      </Text>
      <S.UnitSelectionContainer>
        <RadioInput
          label="Metric"
          name="system"
          onClick={() => setIsMetric(true)}
          defaultChecked
        />
        <RadioInput
          label="Imperial"
          name="system"
          onClick={() => setIsMetric(false)}
        />
      </S.UnitSelectionContainer>
      <S.InputsContainer>
        {isMetric ? (
          <>
            <Input label="Height" unit="cm" />
            <Input label="Weight" unit="kg" />
          </>
        ) : (
          <>
            <Input label="Height" unit="ft" />
            <Input unit="in" />
            <Input label="Weight" unit="st" />
            <Input unit="lbs" />
          </>
        )}
      </S.InputsContainer>
      <S.ResultContainer>
        Results
      </S.ResultContainer>
    </S.Wrapper>
  )
}

export default Calculator
