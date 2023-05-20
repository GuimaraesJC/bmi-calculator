import Text from '../Text'
import Calculator from '../Calculator'

import * as S from './styles'
import { defaultTheme } from '../../styles/theme'

import logo from '../../assets/images/logo.svg'

function Header() {
  return (
    <S.Wrapper>
      <S.InfoContainer>
        <img className="logo" src={logo} alt="BMI Calculator" />
        <S.TextContainer>
          <Text renderAs="h1" type="HeadingXL">
            Body Mass Index Calculator
          </Text>
          <Text
            className="text-info"
            renderAs="p"
            type="BodyM"
            color={defaultTheme.colors.darkElectricBlue}
          >
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting
            point to evaluate your overall health and well-being.
          </Text>
        </S.TextContainer>
      </S.InfoContainer>
      <S.CalculatorContainer>
        <Calculator />
      </S.CalculatorContainer>
    </S.Wrapper>
  )
}

export default Header
