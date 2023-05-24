import Text from '../Text'

import * as S from './styles'
import { defaultTheme } from '../../styles/theme'
import manEating from '../../assets/images/image-man-eating.webp'
import curvedLineLeft from '../../assets/images/pattern-curved-line-left.svg'

function ResultMeaning() {
  return (
    <S.Wrapper>
      <div>
        <img src={manEating} alt="A man eating japanese food" />
      </div>
      <S.InfoContainer>
        <Text className="info-title" renderAs="h2" type="HeadingL">
          What your BMI result means
        </Text>
        <Text
          className="info-text"
          renderAs="p"
          type="BodyM"
          color={defaultTheme.colors.darkElectricBlue}
        >
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
          Maintaining a healthy weight may lower your chances of
          experiencing health issues later on, such as obesity and
          type 2 diabetes. Aim for a nutritious diet with reduced fat
          and sugar content, incorporating ample fruits and vegetables.
          Additionally, strive for regular physical activity, ideally
          about 30 minutes daily for five days a week.
        </Text>
      </S.InfoContainer>

      <img
        className="curved-line-left"
        src={curvedLineLeft}
        alt="Decorative curved line"
      />
    </S.Wrapper>
  )
}

export default ResultMeaning
