import React, { ReactNode } from 'react';
import { FieldValues, RegisterOptions, UseFormReturn } from 'react-hook-form';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import {
  ChakraInput,
  ChakraInputProps,
  FormControl,
  FormLabel,
  HStack,
  FormHelperText,
  FormErrorMessage,
  Icon,
  Flex,
  Stack,
} from '../../chakra';
import { Tooltip } from '../../atoms';

type CustomInputProps = {
  label?: string | ReactNode;
  name: string;
  localForm: UseFormReturn;
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
    <FormControl>
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
                <Flex
                  h='24px'
                  w='24px'
                  bg='primary.500'
                  borderRadius='full'
                  align='center'
                  justify='center'
                >
                  <Icon as={AiOutlineInfoCircle} w='12px' h='12px' />
                </Flex>
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
        {typeof error === 'string' && (
          <FormErrorMessage>{error}</FormErrorMessage>
        )}
      </Stack>
    </FormControl>
  );
};

export default Input;
