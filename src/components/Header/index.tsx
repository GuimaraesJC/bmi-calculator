import Text from '../Text'

import * as S from './styles'

import logo from '../../assets/images/logo.svg'

function Header() {
  return (
    <S.Wrapper>
      <S.InfoContainer>
        <img className="logo" src={logo} alt="BMI Calculator" />
        <Text renderAs="h1" type="HeadingXL">
          Body Mass Index Calculator
        </Text>
      </S.InfoContainer>
      <S.CalculatorContainer></S.CalculatorContainer>
    </S.Wrapper>
  )
}

export default Header
