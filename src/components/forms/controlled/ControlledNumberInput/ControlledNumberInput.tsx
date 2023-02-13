import React from 'react';
import {
  ChakraNumberInputProps,
  ChakraNumberInput,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputField,
  NumberInputStepper,
} from '../../../chakra';

type CustomNumberInputProps = {
  name: string;
  step: number;
  variant: string;
  min: number;
  max: number;
};

export type ControlledNumberInputProps = CustomNumberInputProps &
  ChakraNumberInputProps;

const ControlledNumberInput: React.FC<ControlledNumberInputProps> = ({
  name,
  step,
  variant,
  min,
  max,
  ...props
}) => {
  return (
    <ChakraNumberInput
      variant={variant}
      step={step}
      id={name}
      name={name}
      min={min}
      max={max}
      {...props}
    >
      <NumberInputField name={name} />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </ChakraNumberInput>
  );
};

export default ControlledNumberInput;
