import React from 'react';
import { ChakraText, ChakraTextProps } from '../../chakra';

export interface TextProps extends ChakraTextProps {
  /**
   * Show text as something besides <Box />
   */
  as?: any;
  /**
   * Text content
   */
  content?: string;
  /**
   * Text content
   */
  children?: any;
  /**
   * What text color to use
   */
  color?: string;
  /**
   * Truncate the text and end with ellipsis on limit
   */
  truncated?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'sm' | 'md' | 'lg' | '2xl' | '4xl' | '6xl';
  /**
   * variant to determine styles from themes/components/Text
   */
  variant?: 'textOne' | 'textTwo' | 'shadow';
}

/**
 * Primary UI component for text
 */
const Text: React.FC<TextProps> = ({
  as,
  size,
  color,
  content,
  truncated,
  variant = 'textOne',
  children,
  ...props
}) => (
  <ChakraText
    as={as}
    bg='transparent'
    fontSize={size}
    isTruncated={truncated}
    color={color}
    variant={variant}
    {...props}
  >
    {content || children}
  </ChakraText>
);

export default Text;
