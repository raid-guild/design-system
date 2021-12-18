import React from 'react';
import { ChakraText, ChakraHeadingProps } from '../chakra';

export interface HeadingProps extends ChakraHeadingProps {
  /**
   * Heading content
   */
  content: string;
  /**
   * What Heading color to use
   */
  color?: string;
  /**
   * variant to determine different sizes
   */
  variant: 'shadow' | 'noShadow';
}

/**
 * Primary UI component for Heading
 */
const Heading: React.FC<HeadingProps> = ({
  variant = 'shadow',
  color,
  content,
  ...props
}) => (
  <ChakraText
    bg='transparent'
    color={color}
    fontFamily='texturina'
    variant={variant}
    {...props}
  >
    {content}
  </ChakraText>
);

export default Heading;
