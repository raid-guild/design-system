import React from 'react';
import { RegisterOptions, UseFormReturn } from 'react-hook-form';
import { FaInfoCircle } from 'react-icons/fa';
import {
  ChakraTextarea,
  ChakraTextareaProps,
  FormControl,
  FormLabel,
  Stack,
  FormHelperText,
  FormErrorMessage,
  Icon,
  HStack,
} from '../../chakra';
import { Tooltip } from '../../atoms';

export type CustomTextareaProps = {
  label: string | React.ReactNode;
  name: string;
  helperText?: string;
  tooltip?: string;
  localForm: UseFormReturn;
  registerOptions?: RegisterOptions;
};

export type TextareaProps = ChakraTextareaProps & CustomTextareaProps;

/**
 * Primary UI component for Textarea Input
 */
const Textarea: React.FC<TextareaProps> = ({
  label,
  name,
  localForm,
  registerOptions,
  helperText,
  tooltip,
  ...props
}: TextareaProps) => {
  const {
    register,
    formState: { errors },
  } = localForm;

  const error = errors[name] && errors[name]?.message;

  return (
    <FormControl>
      <Stack spacing={4}>
        <HStack align='center'>
          {label && <FormLabel m='0'>{label}</FormLabel>}
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

        <ChakraTextarea {...props} {...register(name, registerOptions)} />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
        {typeof error === 'string' && (
          <FormErrorMessage>{error}</FormErrorMessage>
        )}
      </Stack>
    </FormControl>
  );
};

export default Textarea;
