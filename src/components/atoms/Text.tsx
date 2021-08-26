import React from 'react';
import { ChakraText } from '../..';

export interface TextProps {
  /**
   * Text content
   */
  content: string;
  /**
   * What text color to use
   */
  color?: string;
  /**
   * Truncate the text and end with elipsis on limit
   */
  truncated?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'sm' | 'md' | 'lg' | '2xl' | '4xl' | '6xl';
  /**
   * variant to determine styles from themes/components/Text
   */
  variant: 'textOne' | 'textTwo';
}

/**
 * Primary UI component for text
 */
export const Text: React.FC<TextProps> = ({
  size,
  color,
  content,
  truncated,
  variant = 'textOne',
  ...props
}) => {
  return (
    <ChakraText
      bg="transparent"
      fontSize={size}
      isTruncated={truncated}
      color={color}
      variant={variant}
      {...props}
    >
      {content}
    </ChakraText>
  );
};
