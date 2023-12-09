import { FormHelperText, Stack } from '@chakra-ui/react';
import React from 'react';
import _ from 'lodash';
import { UseFormReturn, RegisterOptions, Controller } from 'react-hook-form';
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
  registerOptions?: RegisterOptions;
  label?: string | React.ReactNode;
  helperText?: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  localForm: UseFormReturn<any>;
  step?: number;
  variant?: string;
  min?: number;
  max?: number;
  spacing?: number | string;
}

type NumberInputProps = ChakraInputProps & CustomNumberInputProps;

// TODO add tooltip

/**
 * Primary UI component for Heading
 */
const NumberInput = ({
  name,
  label,
  localForm,
  helperText,
  registerOptions,
  isRequired,
  step = 1,
  variant = 'filled',
  min = 0,
  max = 100,
  spacing,
  ...props
}: NumberInputProps) => {
  if (!localForm) return null;

  const {
    control,
    formState: { errors },
  } = localForm;

  const error = name && errors[name] && errors[name]?.message;
  // some Input props not compatible with NumberInput/Controller field props
  const localProps = _.omit(props, ['onInvalid', 'filter', 'defaultValue']);

  return (
    <FormControl isRequired={isRequired} isInvalid={!!errors[name]}>
      <Stack spacing={spacing}>
        {label && <FormLabel m={0}>{label}</FormLabel>}
        <Controller
          control={control}
          name={name}
          rules={{ ...registerOptions, required: isRequired }}
          render={({ field: { ref, ...restField } }) => (
            <ChakraNumberInput
              variant={variant}
              step={step}
              min={min}
              max={max}
              {...localProps}
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
