/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormHelperText, Stack } from '@chakra-ui/react';
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
  step?: number;
  variant?: string;
  min?: number;
  max?: number;
  spacing: number | string;
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
  step = 1,
  variant = 'filled',
  min = 0,
  max = 100,
  spacing,
}: NumberInputProps) => {
  if (!localForm) return null;

  const {
    control,
    formState: { errors },
  } = localForm;

  const error = name && errors[name] && errors[name]?.message;

  return (
    <FormControl isRequired={isRequired} isInvalid={!!errors[name]}>
      <Stack spacing={spacing}>
        {label && <FormLabel m={0}>{label}</FormLabel>}
        <Controller
          control={control}
          name={name}
          rules={customValidations}
          render={({ field: { ref, ...restField } }) => (
            <ChakraNumberInput
              variant={variant}
              step={step}
              min={min}
              max={max}
              {...restField}
            >
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
      </Stack>
    </FormControl>
  );
};

export default NumberInput;
