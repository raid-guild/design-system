import React, { ReactNode } from 'react';
import { UseFormReturn } from 'react-hook-form';
import {
  ChakraInput,
  ChakraInputProps,
  FormControl,
  FormLabel,
} from '../../chakra';

type CustomInputProps = {
  label: string | ReactNode;
  name: string;
  localForm: UseFormReturn;
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
  ...props
}: InputProps) => {
  if (!localForm) return null;
  const { register } = localForm;

  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      <ChakraInput type={type} {...props} {...register(name)} />
    </FormControl>
  );
};

export default Input;
