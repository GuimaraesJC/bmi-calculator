import logo from '../../assets/images/logo.svg'

import * as S from './styles'

function Header() {
  return (
    <S.Wrapper>
      <S.InfoContainer>
        <img className="logo" src={logo} alt="BMI Calculator" />
      </S.InfoContainer>
      <S.CalculatorContainer></S.CalculatorContainer>
    </S.Wrapper>
  )
}

export default Header
