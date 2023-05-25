import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  justify-content: end;
  max-width: 72.5rem;
  height: 44rem;
  margin: 7.5rem auto;

  position: relative;
`

export const TextContainer = styled.div`
  position: absolute;
  max-width: 35.25rem;
  top: 0;
  left: 0;

  .limitation-title {
    margin-bottom: 2.25rem;
  }
`

export const LimitationsContainer = styled.div`
  .gender {
    grid-area: gender;
    transform: translateX(-6.25rem);
  }

  .age {
    grid-area: age;
  }

  .muscle {
    grid-area: muscle;
  }

  .pregnancy {
    grid-area: pregnancy;
    transform: translateX(-12.5rem);
  }

  .race {
    grid-area: race;
    transform: translateX(-12.5rem);
  }

  display: grid;
  grid-template-columns: 22.8125rem 22.8125rem;
  gap: 2rem;
  grid-template-areas:
    ". gender"
    "age muscle"
    "pregnancy race"
  ;
`
