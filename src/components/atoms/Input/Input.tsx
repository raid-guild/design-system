import React from 'react';
import { FieldHookConfig, useField } from 'formik';
import {
  ChakraInput,
  ChakraInputProps,
  FormControl,
  FormLabel,
} from '../../chakra';

type CustomInputProps = {
  label: string;
};

type InputProps = ChakraInputProps &
  CustomInputProps &
  FieldHookConfig<'input'>;

/**
 * Primary UI component for Heading
 */
const Input: React.FC<InputProps> = ({
  label,
  name,
  type,
  ...props
}: InputProps) => {
  const [field] = useField(name);

  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      {/* @ts-ignore next-line */}
      <ChakraInput type={type} {...props} {...field} />
    </FormControl>
  );
};

export default Input;
