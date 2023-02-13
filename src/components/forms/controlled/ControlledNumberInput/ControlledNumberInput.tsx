import React from 'react';
import {
  ChakraNumberInputProps,
  ChakraNumberInput,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputField,
  NumberInputStepper,
  FormLabel,
  Stack,
} from '../../../chakra';

type CustomNumberInputProps = {
  name: string;
  step: number;
  variant: string;
  min: number;
  max: number;
  label: string;
};

export type ControlledNumberInputProps = CustomNumberInputProps &
  ChakraNumberInputProps;

const ControlledNumberInput: React.FC<ControlledNumberInputProps> = ({
  name,
  step,
  variant,
  min,
  max,
  label,
  ...props
}) => {
  return (
    <Stack>
      {label && <FormLabel>{label}</FormLabel>}
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
    </Stack>
  );
};

export default ControlledNumberInput;
