import ResultMeaning from '../ResultMeaning'
import TipsContainer from '../TipsContainer'
import Limitations from '../Limitations'

import * as S from './styles'

function Content() {
  return (
    <S.Wrapper>
      <ResultMeaning />
      <TipsContainer />
      <Limitations />
    </S.Wrapper>
  )
}

export default Content
