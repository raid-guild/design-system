import React, { ReactNode } from 'react';
import { FieldValues, RegisterOptions, UseFormReturn } from 'react-hook-form';
import { FaInfoCircle } from 'react-icons/fa';
import _ from 'lodash';
import {
  ChakraInput,
  ChakraInputProps,
  FormControl,
  FormLabel,
  HStack,
  FormHelperText,
  FormErrorMessage,
  Icon,
  Stack,
} from '../../chakra';
import { Tooltip } from '../../atoms';

type CustomInputProps = {
  label?: string | ReactNode;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  localForm: UseFormReturn<any>;
  tooltip?: string;
  helperText?: string;
  spacing?: number | string;
  registerOptions?: RegisterOptions<FieldValues, string> | undefined;
};

export type InputProps = ChakraInputProps & CustomInputProps;

/**
 * Primary Input component for React Hook Form
 *
 * @param label - Label for the input
 * @param name - Name of the input
 * @param type - Type of the input
 * @param localForm - React Hook Form object
 * @returns Input component
 *
 */
const Input: React.FC<InputProps> = ({
  label,
  name,
  type,
  localForm,
  registerOptions,
  tooltip,
  helperText,
  spacing,
  ...props
}: InputProps) => {
  if (!localForm) return null;
  const {
    register,
    formState: { errors },
  } = localForm;

  const error = errors[name] && errors[name]?.message;

  return (
    <FormControl
      isRequired={_.includes(_.keys(registerOptions), 'required')}
      isInvalid={!!errors[name]}
    >
      <Stack spacing={spacing}>
        {label && (
          <HStack align='center'>
            <FormLabel m='0'>{label}</FormLabel>
            {tooltip && (
              <Tooltip
                label={tooltip}
                shouldWrapChildren
                hasArrow
                placement='end'
              >
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
        )}

        <ChakraInput
          type={type}
          {...props}
          {...register(name, registerOptions)}
        />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
        <FormErrorMessage>{error as string}</FormErrorMessage>
      </Stack>
    </FormControl>
  );
};

export default Input;
