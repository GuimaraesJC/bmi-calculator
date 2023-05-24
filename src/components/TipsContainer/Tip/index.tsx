import Text from '../../Text'

import * as S from './styles'
import { defaultTheme } from '../../../styles/theme'

interface TipsProps {
  info: {
    iconPath: string
    imgAltText: string
    title: string
    text: string
  }
}

function Tip({ info: { iconPath, imgAltText, title, text } }: TipsProps) {
  return (
    <S.Wrapper>
      <img src={iconPath} alt={imgAltText} />
      <Text className="tip-title" renderAs="h3" type="HeadingM">
        {title}
      </Text>
      <Text
        renderAs="p"
        type="BodyM"
        color={defaultTheme.colors.darkElectricBlue}
      >
        {text}
      </Text>
    </S.Wrapper>
  )
}

export default Tip
