import Text from '../Text'

import * as S from './styles'
import { defaultTheme } from '../../styles/theme'

interface InputProps {
  label?: string
  unit?: string
}

function Input({ label, unit }: InputProps) {
  return (
    <S.Wrapper>
      <Text
        renderAs="label"
        type="BodyS"
        color={defaultTheme.colors.darkElectricBlue}
      >
        {label ? label : ''}
      </Text>
      <S.Input type="number" placeholder="0" />
      <S.Unit
        renderAs="span"
        type="HeadingM"
        color={defaultTheme.colors.blue}
      >
        {unit ? unit : ''}
      </S.Unit>
    </S.Wrapper>
  )
}

export default Input
