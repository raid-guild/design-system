/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormHelperText } from '@chakra-ui/react';
import React from 'react';
import {
  UseFormReturn,
  RegisterOptions,
  Controller,
  FieldValues,
} from 'react-hook-form';
import {
  FormControl,
  FormLabel,
  ChakraInputProps,
  ChakraNumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormErrorMessage,
} from '../../chakra';

export interface CustomNumberInputProps {
  customValidations?: RegisterOptions;
  label?: string | React.ReactNode;
  helperText?: string;
  name: string;
  localForm: UseFormReturn<FieldValues>;
  options?: any;
}

type NumberInputProps = ChakraInputProps & CustomNumberInputProps;

/**
 * Primary UI component for Heading
 */
const NumberInput = ({
  name,
  label,
  localForm,
  helperText,
  customValidations,
  isRequired,
}: NumberInputProps) => {
  if (!localForm) return null;

  const {
    control,
    formState: { errors },
  } = localForm;

  const error = name && errors[name] && errors[name]?.message;

  return (
    <FormControl isRequired={isRequired} isInvalid={!!errors[name]}>
      {label && <FormLabel>{label}</FormLabel>}
      <Controller
        control={control}
        name={name}
        rules={customValidations}
        render={({ field: { ref, ...restField } }) => (
          <ChakraNumberInput {...restField}>
            <NumberInputField ref={ref} name={restField.name} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </ChakraNumberInput>
        )}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      {typeof error === 'string' && (
        <FormErrorMessage>{error}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default NumberInput;
