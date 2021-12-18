import React from 'react';
import { ChakraHeadingProps, ChakraText } from '../chakra';

export interface HeadingProps extends ChakraHeadingProps {
  /**
   * Show text as something besides <Box />
   */
  as?: any;
  /**
   * Heading content
   */
  content?: string;
  /**
   * Heading childner content
   */
  children?: any;
  /**
   * What Heading color to use
   */
  color?: string;
  /**
   * variant to determine different sizes
   */
  variant?: 'shadow' | 'noShadow';
}

/**
 * Primary UI component for Heading
 */
const Heading: React.FC<HeadingProps> = ({
  variant = 'shadow',
  as,
  color,
  content,
  children,
  ...props
}) => (
  <ChakraText
    as={as}
    bg='transparent'
    color={color}
    fontFamily='texturina'
    variant={variant}
    {...props}
  >
    {content || children}
  </ChakraText>
);

export default Heading;
