import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import {
  ChakraTextarea,
  ChakraTextareaProps,
  FormControl,
  FormLabel,
} from '../../chakra';

type CustomControlledTextareaProps = {
  label: string;
  name: string;
  localForm: UseFormReturn;
};

type ControlledTextareaProps = ChakraTextareaProps &
  CustomControlledTextareaProps;

const ControlledTextarea: React.FC<ControlledTextareaProps> = ({
  label,
  name,
  localForm,
  ...props
}: ControlledTextareaProps) => {
  const { register } = localForm;

  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      {/* @ts-ignore next-line */}
      <ChakraTextarea {...props} {...register(name)} />
    </FormControl>
  );
};

export default ControlledTextarea;
