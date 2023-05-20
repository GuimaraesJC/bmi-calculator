import React from 'react'

import { StyledText } from './styles';

interface TextProps {
  type: 'HeadingXL' | 'HeadingL' | 'HeadingM' | 'HeadingS' | 'BodyM' | 'BodyM-Bold' | 'BodyS'
  renderAs: keyof JSX.IntrinsicElements | typeof React.Fragment
  color?: string
  className?: string
  children: string
}

function Text({ type, renderAs, color, className, children }: TextProps) {
  return (
    <StyledText className={className} as={renderAs} type={type} color={color}>
      {children}
    </StyledText>
  )
}

export default Text;
