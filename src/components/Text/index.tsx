import React from 'react'

import { StyledText } from './styles';

interface TextProps {
  type: 'HeadingXL' | 'HeadingL' | 'HeadingM' | 'HeadingS' | 'BodyM' | 'BodyM-Bold' | 'BodyS'
  renderAs: keyof JSX.IntrinsicElements | typeof React.Fragment
  children: string
}

function Text({ type, renderAs, children }: TextProps) {
  return <StyledText as={renderAs} type={type}>{children}</StyledText>;
}

export default Text;
