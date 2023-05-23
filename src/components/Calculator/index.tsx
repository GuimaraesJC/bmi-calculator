import { useState } from 'react'

import Text from '../Text'
import RadioInput from '../RadioInput'
import Input from '../Input'

import * as S from './styles'
import { defaultTheme } from '../../styles/theme'

function Calculator() {
  const [isMetric, setIsMetric] = useState<boolean>(true);
  const [hasResult, setHasResult] = useState<boolean>(true);

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
      <S.ResultContainer hasResult={hasResult}>
        {hasResult ? (
          <>
            <S.ResultCalculationContainer>
              <Text
                renderAs="span"
                type="BodyM-Bold"
                color={defaultTheme.colors.white}
              >
                Your BMI is...
              </Text>
              <Text
                renderAs="span"
                type="HeadingXL"
                color={defaultTheme.colors.white}
              >
                23.4
              </Text>
            </S.ResultCalculationContainer>
            <div>
              <Text
                renderAs="p"
                type="BodyS"
                color={defaultTheme.colors.white}
              >
                Your BMI suggests you’re a healthy weight.
                Your ideal weight is between 63.3kgs - 85.2kgs.
              </Text>
            </div>
          </>
        ) : (
          <S.NoResultTextContainer>
            <Text
              renderAs="span"
              type="HeadingM"
              color={defaultTheme.colors.white}
            >
              Welcome!
            </Text>
            <Text
              renderAs="p"
              type="BodyS"
              color={defaultTheme.colors.white}
            >
              Enter your height and weight and you’ll see your BMI result here
            </Text>
          </S.NoResultTextContainer>
        )}

      </S.ResultContainer>
    </S.Wrapper>
  )
}

export default Calculator
