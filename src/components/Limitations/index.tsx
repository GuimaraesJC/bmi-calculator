import Text from '../Text'
import LimitationItem from './LimitationItem'

import contents from './contents'

import * as S from './styles'
import { defaultTheme } from '../../styles/theme'

function Limitations() {
  return (
    <S.Wrapper>
      <S.TextContainer>
        <Text className="limitation-title" renderAs="h2" type="HeadingL">
          Limitations of BMI
        </Text>
        <Text
          renderAs="p"
          type="BodyM"
          color={defaultTheme.colors.darkElectricBlue}
        >
          Although BMI is often a practical indicator of healthy weight,
          it is not suited for every person. Specific groups should
          carefully consider their BMI outcomes, and in certain cases,
          the measurement may not be beneficial to use.
        </Text>
      </S.TextContainer>
      <S.LimitationsContainer>
        <LimitationItem className="gender" info={contents.gender} />
        <LimitationItem className="age" info={contents.age} />
        <LimitationItem className="muscle" info={contents.muscle} />
        <LimitationItem className="pregnancy" info={contents.pregnancy} />
        <LimitationItem className="race" info={contents.race} />
      </S.LimitationsContainer>
    </S.Wrapper>
  )
}

export default Limitations
