import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import {
  ChakraInput,
  ChakraInputProps,
  FormControl,
  FormLabel,
} from '../../chakra';

type CustomInputProps = {
  label: string;
  name: string;
  localForm: UseFormReturn;
};

export type InputProps = ChakraInputProps & CustomInputProps;

/**
 * Primary Input component for React Hook Form
 */
const Input: React.FC<InputProps> = ({
  label,
  name,
  type,
  localForm,
  ...props
}: InputProps) => {
  const { register } = localForm;

  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      <ChakraInput type={type} {...props} {...register(name)} />
    </FormControl>
  );
};

export default Input;
