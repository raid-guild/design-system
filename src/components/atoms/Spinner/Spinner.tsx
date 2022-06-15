import React from 'react';
import { ChakraSpinner, ChakraSpinnerProps } from '../../chakra';

export type SpinnerProps = ChakraSpinnerProps;

// type spinnerSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const spinnerThinkness: { [name: string]: string } = {
  xs: '1px',
  sm: '2px',
  md: '3px',
  lg: '4px',
  xl: '5px',
  undefined: '6px',
};

const Spinner: React.FC<SpinnerProps> = ({
  size,
  color,
  ...props
}: SpinnerProps) => (
  <ChakraSpinner
    thickness={size && spinnerThinkness[size]}
    speed='0.65s'
    size={size}
    color={color || 'red.500'}
    {...props}
  />
);

export default Spinner;
