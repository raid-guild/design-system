import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import {
  FormControl,
  FormLabel,
  ChakraInputProps,
  NumberInput as ChakraNumberInput,
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
  type,
  localForm,
  ...props
}: NumberInputProps) => {
  const { register } = localForm;

  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      <ChakraNumberInput type={type} {...props} {...register(name)}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </ChakraNumberInput>
    </FormControl>
  );
};

export default NumberInput;
