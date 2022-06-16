import React from 'react';
import { Box, useStyleConfig, ChakraBoxProps } from '../../chakra';

export interface CardProps extends ChakraBoxProps {
  heading?: React.ReactNode;
  centerDivider?: React.ReactNode;
  variant?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  heading,
  centerDivider,
  variant,
  children,
  ...props
}: CardProps) => {
  const styles: any = useStyleConfig('Card', { variant });

  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles} {...props}>
      <Box __css={styles.header}>
        <Box __css={styles.centerDivider}>{centerDivider}</Box>
        {heading}
      </Box>
      <Box __css={styles.body}>{children}</Box>
    </Box>
  );
};

export default Card;
