import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { AiOutlineInfoCircle } from 'react-icons/ai';
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
  Flex,
} from '../../chakra';
import { Tooltip } from '../../atoms';

export type CustomTextareaProps = {
  label: string;
  name: string;
  helperText?: string;
  tooltip?: string;
  localForm: UseFormReturn;
};

export type TextareaProps = ChakraTextareaProps & CustomTextareaProps;

/**
 * Primary UI component for Textarea Input
 */
const Textarea: React.FC<TextareaProps> = ({
  label,
  name,
  localForm,
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

        <ChakraTextarea {...props} {...register(name)} />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
        {typeof error === 'string' && (
          <FormErrorMessage>Error Message</FormErrorMessage>
        )}
      </Stack>
    </FormControl>
  );
};

export default Textarea;
