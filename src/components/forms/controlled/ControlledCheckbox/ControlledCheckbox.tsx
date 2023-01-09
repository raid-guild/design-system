import React from 'react';
import { ChakraCheckbox, ChakraCheckboxProps } from '../../../chakra';

export interface CustomCheckboxProps {
  label: string;
  isChecked: boolean;
  setIsChecked: (value: boolean) => void;
}

export type RadioProps = CustomCheckboxProps & ChakraCheckboxProps;

const ControlledCheckbox: React.FC<RadioProps> = ({
  label,
  size,
  isChecked,
  setIsChecked,
  ...props
}: RadioProps) => (
  <ChakraCheckbox
    value={label}
    size={size}
    isChecked={isChecked}
    onChange={() => setIsChecked(!isChecked)}
    key={label}
    {...props}
  >
    {label}
  </ChakraCheckbox>
);

export default ControlledCheckbox;
