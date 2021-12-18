import React from 'react';
import { ChakraHeadingProps, ChakraHeading } from '../chakra';

export type HeadingVariants = 'shadow' | 'noShadow';

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
  variant?: HeadingVariants;
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
  <ChakraHeading
    as={as}
    bg='transparent'
    color={color}
    variant={variant}
    {...props}
  >
    {content || children}
  </ChakraHeading>
);

export default Heading;
