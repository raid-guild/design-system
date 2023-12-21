import { FormHelperText, HStack, Icon, Stack, Tooltip } from '@chakra-ui/react';
import React from 'react';
import _ from 'lodash';
import { UseFormReturn, RegisterOptions, Controller } from 'react-hook-form';
import { FaInfoCircle } from 'react-icons/fa';
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
  label?: string | React.ReactNode;
  helperText?: string;
  name: string;
  tooltip?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  localForm: UseFormReturn<any>;
  registerOptions?: RegisterOptions;
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
  tooltip,
  registerOptions,
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
    <Controller
      control={control}
      name={name}
      rules={registerOptions}
      render={({ field: { ref, ...restField } }) => (
        <FormControl
          isRequired={!!registerOptions?.required || false}
          isInvalid={!!errors[name]}
          m={0}
        >
          <Stack spacing={spacing}>
            <HStack>
              {label && <FormLabel m={0}>{label}</FormLabel>}
              {tooltip && (
                <Tooltip>
                  <Icon
                    as={FaInfoCircle}
                    boxSize={3}
                    color='red.500'
                    bg='white'
                    borderRadius='full'
                  />
                </Tooltip>
              )}
            </HStack>
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
            {helperText && <FormHelperText>{helperText}</FormHelperText>}

            <FormErrorMessage>{error as string}</FormErrorMessage>
          </Stack>
        </FormControl>
      )}
    />
  );
};

export default NumberInput;
