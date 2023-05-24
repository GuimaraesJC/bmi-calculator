import styled from 'styled-components'

export const Wrapper = styled.section`
  max-width: 72.5rem;
  height: 33.375rem;
  margin: 4rem auto 0;
  display: grid;
  grid-template-columns: 34.125rem auto;
  gap: 8.25rem;
  align-items: flex-end;
  position: relative;

  .curved-line-left {
    position: absolute;
    top: -2.25rem;
    right: 1.75rem;
  }
`

export const InfoContainer = styled.div`
  .info-title {
    margin-bottom: 2.25rem;
  }

  .info-text {
    margin-bottom: 2.5rem;
  }
`
