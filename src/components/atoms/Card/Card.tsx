import React, { ReactNode } from 'react';
import {
  Box,
  ChakraCard,
  CardBody,
  CardHeader,
  ChakraBoxProps,
} from '../../chakra';

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
  const centerDividerStyles = {
    position: 'absolute',
    bottom: -5,
    left: '45%',
    width: '50px',
    height: '50px',
  };

  if (heading) {
    return (
      <ChakraCard variant={variant} {...props}>
        <CardHeader>
          <Box __css={centerDividerStyles}>{centerDivider}</Box>
          {heading}
        </CardHeader>
        <CardBody>{children}</CardBody>
      </ChakraCard>
    );
  }

  return (
    <ChakraCard variant={variant} {...props}>
      <CardBody>{children}</CardBody>
    </ChakraCard>
  );
};

export default Card;
