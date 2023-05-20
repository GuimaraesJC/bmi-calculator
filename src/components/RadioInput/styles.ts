import styled from 'styled-components'

export const Label = styled.label`
  font-size: 1rem;
  display: grid;
  align-items: center;
  grid-template-columns: 2rem auto;
  gap: 1.125rem;
`

export const Input = styled.input`
  &[type="radio"] {
    appearance: none;
    background-color: ${({ theme }) => theme.colors.white};
    width: 2rem;
    height: 2rem;
    border: 1px solid ${({ theme }) => theme.colors.borders};
    border-radius: 50%;
    display: grid;
    place-content: center;
  }

  &[type="radio"]:hover {
    border-color: ${({ theme }) => theme.colors.blue};
  }

  &[type="radio"]:checked {
    border: none;
  }

  &[type="radio"]::before {
    content: "";
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow:
      inset 1rem 1rem ${({ theme }) => theme.colors.blue},
      0rem 0rem 0px 8px rgba(52, 95, 246, 0.15);
  }

  &[type="radio"]:checked::before {
    transform: scale(1);
  }
`
