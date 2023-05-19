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

  .logo {
    position: absolute;
    top: 4.75rem;
    left: 7.25rem;
  }
`

export const CalculatorContainer = styled.div`
  background-color: white;
  width: 564px;
  height: 484px;
  margin-left: -16.625rem;
  margin-top: 10.375rem;
  z-index: 1;
  box-shadow: 16px 32px 56px rgba(143, 174, 207, 0.25);
  border-radius: 1rem;
`
