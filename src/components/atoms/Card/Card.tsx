import React, { ReactNode } from 'react';
import { Box, useStyleConfig, ChakraBoxProps } from '../../chakra';

export interface CardProps extends ChakraBoxProps {
  heading?: ReactNode;
  centerDivider?: ReactNode;
  variant?: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({
  heading,
  centerDivider,
  variant,
  children,
  ...props
}: CardProps) => {
  const styles: any = useStyleConfig('Card', { variant });

  if (heading) {
    return (
      <Box __css={styles} {...props}>
        <Box __css={styles.header}>
          <Box __css={styles.centerDivider}>{centerDivider}</Box>
          {heading}
        </Box>
        <Box __css={styles.body}>{children}</Box>
      </Box>
    );
  }

  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles} {...props}>
      {children}
    </Box>
  );
};

export default Card;
