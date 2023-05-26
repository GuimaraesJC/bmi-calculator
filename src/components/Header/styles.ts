import styled from 'styled-components'

export const Wrapper = styled.header`
  display: grid;
  grid-template-columns: 61.125rem 1fr;
  width: 79.75rem;
  height: 46rem;
`

export const InfoContainer = styled.div`
  width: 61.125rem;
  height: inherit;
  margin-left: 1.5rem;
  border-radius: 0 0 35px 35px;
  background: linear-gradient(290.1deg, #D6E6FE 0%, rgba(214, 252, 254, 0) 100%);
  position: relative;
  z-index: -1;

  .logo {
    position: absolute;
    top: 4.75rem;
    left: 7.25rem;
  }
`

export const CalculatorContainer = styled.div`
  transform: translate(-16.625rem, 10.375rem);
`

export const TextContainer = styled.div`
  max-width: 29rem;
  margin-left: 7.25rem;
  margin-top: 16.625rem;

  .text-info {
    margin-top: 2.25rem;
  }
`
