import styled from 'styled-components';

interface TextProps {
  type: 'HeadingXL' | 'HeadingL' | 'HeadingM' | 'HeadingS' | 'BodyM' | 'BodyM-Bold' | 'BodyS'
}

export const StyledText = styled.p<TextProps>`
  color: ${({ theme }) => theme.colors.gunmetal};

  ${({ type, theme }) => {
    switch (type) {
      case 'HeadingXL':
        return `
          font-size: 4rem;
          font-weight: ${theme.text.fontWeight.semibold};
          line-height: ${theme.text.lineHeight.heading};
          letter-spacing: ${theme.text.letterSpacing};
        `
      case 'HeadingL':
        return `
          font-size: 3rem;
          font-weight: ${theme.text.fontWeight.semibold};
          line-height: ${theme.text.lineHeight.heading};
          letter-spacing: ${theme.text.letterSpacing};
        `
      case 'HeadingM':
        return `
          font-size: 1.5rem;
          font-weight: ${theme.text.fontWeight.semibold};
          line-height: ${theme.text.lineHeight.heading};
          letter-spacing: ${theme.text.letterSpacing};
        `
      case 'HeadingS':
        return `
          font-size: 1.25rem;
          font-weight: ${theme.text.fontWeight.semibold};
          line-height: ${theme.text.lineHeight.heading};
          letter-spacing: ${theme.text.letterSpacing};
        `
      case 'BodyM':
        return `
          font-size: 1rem;
          font-weight: ${theme.text.fontWeight.regular};
          line-height: ${theme.text.lineHeight.body};
        `
      case 'BodyM-Bold':
        return `
          font-size: 1rem;
          font-weight: ${theme.text.fontWeight.semibold};
          line-height: ${theme.text.lineHeight.body};
        `
      case 'BodyS':
        return `
          font-size: 0.875rem;
          font-weight: ${theme.text.fontWeight.regular};
          line-height: ${theme.text.lineHeight.body};
        `
      default:
        return null
    }
  }}
`;
