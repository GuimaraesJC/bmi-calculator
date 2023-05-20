import styled from 'styled-components'
import Text from '../Text'

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 4.25rem;
  gap: 0.5rem;
  position: relative;
`

export const Input = styled.input`
  width: 100%;
  height: 4.25rem;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.borders};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gunmetal};
  padding: 1.25rem 1.5rem;
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.text.fontWeight.semibold};
  outline: 0;

  &:hover,
  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.blue};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gunmetal};
    opacity: 0.25;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    appearance: none;
    -moz-appearance: textfield;
  }
`

export const Unit = styled(Text)`
  position: absolute;
  top: 3rem;
  right: 1.5rem;
  text-transform: lowercase;
`
