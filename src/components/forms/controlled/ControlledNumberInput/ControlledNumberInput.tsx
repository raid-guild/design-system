import React from 'react';
import { RegisterOptions, UseFormReturn } from 'react-hook-form';
import {
  ChakraNumberInputProps,
  ChakraNumberInput,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputField,
  NumberInputStepper,
} from '../../../chakra';

type CustomNumberInputProps = {
  customValidations?: RegisterOptions;
  localForm: UseFormReturn;
  ref: React.LegacyRef<HTMLInputElement>;
};

export type ControlledNumberInputProps = CustomNumberInputProps &
  ChakraNumberInputProps;

const ControlledRadio: React.FC<ControlledNumberInputProps> = ({
  name,
  precision,
  step,
  variant,
  ref,
  ...props
}) => {
  return (
    <ChakraNumberInput
      variant={variant}
      step={step}
      id={name}
      precision={precision}
      {...props}
    >
      <NumberInputField ref={ref} name={name} />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </ChakraNumberInput>
  );
};

export default ControlledRadio;
