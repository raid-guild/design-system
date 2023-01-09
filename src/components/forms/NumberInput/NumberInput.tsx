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
  customValidations?: RegisterOptions;
  label?: string;
  min?: number;
  max?: number;
  name: string;
  localForm: UseFormReturn;
  precision?: number;
  step?: number;
  value?: number;
  variant: string;
};

type NumberInputProps = ChakraInputProps & CustomNumberInputProps;

/**
 * Primary UI component for Heading
 */
const NumberInput: React.FC<NumberInputProps> = ({
  customValidations,
  label,
  min,
  max,
  name,
  localForm,
  precision,
  step,
  value,
  variant,
}: NumberInputProps) => {
  const { register } = localForm;

  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      <ChakraNumberInput
        min={min}
        max={max}
        precision={precision}
        step={step}
        value={value}
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
