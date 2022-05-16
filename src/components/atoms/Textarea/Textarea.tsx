import React from 'react';
import { FieldHookConfig, useField } from 'formik';
import {
  ChakraTextarea,
  ChakraTextareaProps,
  FormControl,
  FormLabel,
} from '../../chakra';

type CustomTextareaProps = {
  label: string;
};

type TextareaProps = ChakraTextareaProps &
  CustomTextareaProps &
  FieldHookConfig<'textarea'>;

/**
 * Primary UI component for Heading
 */
const Textarea: React.FC<TextareaProps> = ({
  label,
  name,
  type,
  ...props
}: TextareaProps) => {
  const [field] = useField(name);

  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      {/* @ts-ignore next-line */}
      <ChakraTextarea type={type} {...props} {...field} />
    </FormControl>
  );
};

export default Textarea;
