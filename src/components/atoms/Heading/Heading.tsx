import React, { ReactNode } from 'react';
import { ChakraHeadingProps, ChakraHeading } from '../../chakra';

/**
 * Primary UI component for Heading
 */
const Heading = ({
  variant,
  as,
  color,
  content,
  children,
  ...props
}: HeadingProps) => (
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

export type HeadingVariants = 'shadow' | 'noShadow';

export interface HeadingProps extends ChakraHeadingProps {
  /**
   * Heading content
   */
  content?: string;
  /**
   * Heading children content
   */
  children?: ReactNode;
  /**
   * What Heading color to use
   */
  color?: string;
  /**
   * variant to determine different sizes
   */
  variant?: HeadingVariants;
}

export default Heading;
