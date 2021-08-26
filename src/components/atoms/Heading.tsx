import React from 'react';
import { ChakraText } from '../..';

export interface HeadingProps {
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
  variant: 'headingOne' | 'headingTwo' | 'headingThree' | 'labels';
}

/**
 * Primary UI component for Heading
 */
export const Heading: React.FC<HeadingProps> = ({
  variant,
  color,
  content,
  ...props
}) => {
  return (
    <ChakraText
      bg="transparent"
      color={color}
      fontFamily="texturina"
      variant={variant}
      {...props}
    >
      {content}
    </ChakraText>
  );
};
