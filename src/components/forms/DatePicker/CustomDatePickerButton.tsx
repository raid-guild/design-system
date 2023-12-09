import React from 'react';
import { Button, ChakraButtonProps, forwardRef } from '../../chakra';

export type CustomDatePickerButtonProps = ChakraButtonProps & {
  value?: React.ReactNode;
  onClick?: () => void;
  ref?: HTMLInputElement;
};

export type CustomDatePickerButton = CustomDatePickerButtonProps & {
  Button: typeof Button;
};

export const CustomDatePickerButton = forwardRef<
  CustomDatePickerButtonProps,
  'button'
>(({ value, onClick, variant = 'outline' }, ref) => (
  <Button onClick={onClick} ref={ref} variant={variant}>
    {value}
  </Button>
));
