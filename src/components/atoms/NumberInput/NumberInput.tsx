import React from 'react';
import { UseFormReturn, RegisterOptions } from 'react-hook-form';
import {
  FormControl,
  FormLabel,
  ChakraInputProps,
  ChakraNumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '../../chakra';

type CustomNumberInputProps = {
  label?: string;
  step?: number;
  min?: number;
  max?: number;
  precision?: number;
  name: string;
  variant: string;
  localForm: UseFormReturn;
  customValidations?: RegisterOptions;
};

type NumberInputProps = ChakraInputProps & CustomNumberInputProps;

/**
 * Primary UI component for Heading
 */
const NumberInput: React.FC<NumberInputProps> = ({
  label,
  step,
  min,
  max,
  precision,
  name,
  variant,
  localForm,
  customValidations,
}: NumberInputProps) => {
  const { register } = localForm;

  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      <ChakraNumberInput
        step={step}
        min={min}
        max={max}
        precision={precision}
        variant={variant}
      >
        <NumberInputField {...register(name, customValidations)} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </ChakraNumberInput>
    </FormControl>
  );
};

export default NumberInput;
