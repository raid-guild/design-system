import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import {
  ChakraTextarea,
  ChakraTextareaProps,
  FormControl,
  FormLabel,
} from '../../chakra';

type CustomTextareaProps = {
  label: string;
  name: string;
  localForm: UseFormReturn;
};

type TextareaProps = ChakraTextareaProps & CustomTextareaProps;

/**
 * Primary UI component for Heading
 */
const Textarea: React.FC<TextareaProps> = ({
  label,
  name,
  localForm,
  ...props
}: TextareaProps) => {
  const { register } = localForm;

  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      {/* @ts-ignore next-line */}
      <ChakraTextarea {...props} {...register(name)} />
    </FormControl>
  );
};

export default Textarea;
