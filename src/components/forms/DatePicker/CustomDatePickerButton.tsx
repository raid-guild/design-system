import React from 'react';
import { Button, ChakraButtonProps, forwardRef } from '../../chakra';

export type CustomDatePickerButtonProps = ChakraButtonProps & {
  value?: React.ReactNode;
  onClick?: () => void;
  ref?: HTMLInputElement;
  placeholder?: string;
};

export type CustomDatePickerButton = CustomDatePickerButtonProps & {
  Button: typeof Button;
};

export const CustomDatePickerButton: React.FC<CustomDatePickerButtonProps> =
  forwardRef<CustomDatePickerButtonProps, 'button'>(
    (
      { value, onClick, placeholder = 'Select Date', variant = 'outline' },
      ref
    ) => (
      <Button onClick={onClick} ref={ref} variant={variant}>
        {value || placeholder}
      </Button>
    )
  );
