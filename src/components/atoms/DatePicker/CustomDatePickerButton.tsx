import React from 'react';
import { Button, ButtonProps, forwardRef, ComponentWithAs } from '../../chakra';

export type CustomDatePickerButtonProps = ButtonProps & {
  value?: React.ReactNode;
  onClick?: () => void;
  ref?: HTMLInputElement;
};

export type CustomDatePickerButton = ComponentWithAs<
  'button',
  CustomDatePickerButtonProps
> & {
  Button: typeof Button;
};

export const CustomDatePickerButton = forwardRef<
  CustomDatePickerButtonProps,
  'button'
>(({ value, onClick }, ref) => (
  <Button onClick={onClick} ref={ref} variant='solid'>
    {value}
  </Button>
));
