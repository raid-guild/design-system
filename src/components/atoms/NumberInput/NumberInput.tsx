import React from 'react';
import { UseFormReturn } from 'react-hook-form';
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
  label: string;
  name: string;
  localForm: UseFormReturn;
};

type NumberInputProps = ChakraInputProps & CustomNumberInputProps;

/**
 * Primary UI component for Heading
 */
const NumberInput: React.FC<NumberInputProps> = ({
  label,
  name,
  localForm,
}: NumberInputProps) => {
  const { register } = localForm;

  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      <ChakraNumberInput>
        <NumberInputField {...register(name)} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </ChakraNumberInput>
    </FormControl>
  );
};

export default NumberInput;
