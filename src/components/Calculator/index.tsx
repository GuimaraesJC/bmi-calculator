import { useState, useEffect } from 'react'

import Text from '../Text'
import RadioInput from '../RadioInput'
import Input from '../Input'

import { bmiRanges } from './contents'

import * as S from './styles'
import { defaultTheme } from '../../styles/theme'

function Calculator() {
  const [isMetric, setIsMetric] = useState<boolean>(true)
  const [hasResult, setHasResult] = useState<boolean>(false)

  const [BMI, setBMI] = useState<string>('')
  const [explanation, setExplanation] = useState<string>('');

  const [heightCM, setHeightCM] = useState<string>('')
  const [heightFT, setHeightFT] = useState<string>('')
  const [heightIN, setHeightIN] = useState<string>('')

  const [weightKG, setWeightKG] = useState<string>('')
  const [weightST, setWeightST] = useState<string>('')
  const [weightLB, setWeightLB] = useState<string>('')

  function calculateMetricBMI() {
    if (heightCM && weightKG) {
      const height = Number(heightCM) / 100
      const weight = Number(weightKG)

      const bmi = weight / (height * height)

      setBMI(bmi.toFixed(2))
      setHasResult(true)
    }

    return
  }

  function calculateImperialBMI() {
    if (heightFT && heightIN && weightST && weightLB) {
      const height = Number(heightFT) * 12 + Number(heightIN)
      const weight = Number(weightST) * 14 + Number(weightLB)

      const bmi = (weight / (height * height)) * 703

      setBMI(bmi.toFixed(2))
      setHasResult(true)
    }

    return
  }

  function calculateBMI() {
    if (isMetric) {
      calculateMetricBMI()
    } else {
      calculateImperialBMI()
    }
  }

  function resetFields() {
    setHeightCM('')
    setHeightFT('')
    setHeightIN('')

    setWeightKG('')
    setWeightST('')
    setWeightLB('')
  }

  useEffect(() => {
    calculateBMI()
  }, [heightCM, heightFT, heightIN, weightKG, weightST, weightLB])

  useEffect(() => {
    if (isMetric && (!heightCM || !weightKG)) {
      setHasResult(false)
    }
  }, [heightCM, weightKG])

  useEffect(() => {
    if (!isMetric && (!heightFT || !heightIN || !weightST || !weightLB)) {
      setHasResult(false)
    }
  }, [heightFT, heightIN, weightST, weightLB])

  useEffect(() => {
    const bmi = Number(BMI);

    for (const range of bmiRanges) {
      if (bmi >= range.min && bmi < range.max) {
        setExplanation(range.explanation);
        break;
      }
    }
  }, [BMI]);

  useEffect(() => {
    resetFields()
    setBMI('')
    setExplanation('')
    setHasResult(false)

  }, [isMetric])

  return (
    <S.Wrapper>
      <Text renderAs="span" type="HeadingM">
        Enter your details below
      </Text>
      <S.UnitSelectionContainer>
        <RadioInput
          label="Metric"
          name="system"
          onChange={() => setIsMetric(true)}
          defaultChecked
        />
        <RadioInput
          label="Imperial"
          name="system"
          onChange={() => setIsMetric(false)}
        />
      </S.UnitSelectionContainer>
      <S.InputsContainer>
        {isMetric ? (
          <>
            <Input
              label="Height"
              unit="cm"
              onChange={
                (event: React.ChangeEvent<HTMLInputElement>) => {
                  setHeightCM(event.target.value)
                }
              }
              value={heightCM}
            />
            <Input
              label="Weight"
              unit="kg"
              onChange={
                (event: React.ChangeEvent<HTMLInputElement>) => {
                  setWeightKG(event.target.value)
                }
              }
              value={weightKG}
            />
          </>
        ) : (
          <>
            <Input
              label="Height"
              unit="ft"
              onChange={
                (event: React.ChangeEvent<HTMLInputElement>) => {
                  setHeightFT(event.target.value)
                }
              }
              value={heightFT}
            />
            <Input
              unit="in"
              onChange={
                (event: React.ChangeEvent<HTMLInputElement>) => {
                  setHeightIN(event.target.value)
                }
              }
              value={heightIN}
            />
            <Input
              label="Weight"
              unit="st"
              onChange={
                (event: React.ChangeEvent<HTMLInputElement>) => {
                  setWeightST(event.target.value)
                }
              }
              value={weightST}
            />
            <Input
              unit="lbs"
              onChange={
                (event: React.ChangeEvent<HTMLInputElement>) => {
                  setWeightLB(event.target.value)
                }
              }
              value={weightLB}
            />
          </>
        )}
      </S.InputsContainer>
      <S.ResultContainer $hasResult={hasResult}>
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
                {String(BMI)}
              </Text>
            </S.ResultCalculationContainer>
            <div>
              <Text
                renderAs="p"
                type="BodyS"
                color={defaultTheme.colors.white}
              >
                {explanation}
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
