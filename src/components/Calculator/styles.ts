import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: white;
  width: 35.25rem;
  min-height: 28rem;
  padding: 2rem;
  box-shadow: 1rem 2rem 3.5rem rgba(143, 174, 207, 0.25);
  border-radius: 1rem;
`

export const UnitSelectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
`

export const InputsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
`

interface ResultContainerProps {
  hasResult: boolean
}

export const ResultContainer = styled.div<ResultContainerProps>`
  width: 100%;
  height: ${({ hasResult }) => hasResult ? '10.375rem' : '8.125rem'};
  display: ${({ hasResult }) => hasResult ? 'grid' : 'block'};

  ${({ hasResult }) => hasResult && `
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    align-items: center;
  `};

  background: linear-gradient(90deg, #345FF7 0%, #587DFF 100%);
  border-radius: 1rem 100rem 100rem 1rem;
  padding: 2rem;
`

export const ResultCalculationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const NoResultTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
