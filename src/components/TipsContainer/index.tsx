import Tip from './Tip'

import contents from './Tip/contents'

import * as S from './styles'

function TipsContainer() {
  return (
    <S.Wrapper>
      <Tip info={contents.eating} />
      <Tip info={contents.exercise} />
      <Tip info={contents.sleep} />
    </S.Wrapper>
  )
}

export default TipsContainer
