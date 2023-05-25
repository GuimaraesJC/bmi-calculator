import Text from '../../Text'

import * as S from './styles'
import { defaultTheme } from '../../../styles/theme'

interface LimitationItemProps {
  className: string
  info: {
    iconPath: string
    imgAltText: string
    title: string
    text: string
  }
}

function LimitationItem({
  className,
  info: {
    iconPath,
    imgAltText,
    title,
    text,
  }
}: LimitationItemProps) {
  return (
    <S.Wrapper className={className}>
      <S.TitleContainer>
        <img className="icon" src={iconPath} alt={imgAltText} />
        <Text renderAs="h3" type="HeadingS">
          {title}
        </Text>
      </S.TitleContainer>
      <S.InfoContainer>
        <Text
          renderAs="h3"
          type="BodyM"
          color={defaultTheme.colors.darkElectricBlue}
        >
          {text}
        </Text>
      </S.InfoContainer>
    </S.Wrapper>
  )
}

export default LimitationItem
