import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { ChakraSelect, ChakraSelectProps } from '../../chakra';

interface SelectOption {
  label: string;
  value: any;
}

interface CustomSelectProps {
  name: string;
  options: SelectOption[];
  localForm: UseFormReturn;
}

export type SelectProps = CustomSelectProps & ChakraSelectProps;

const Select: React.FC<SelectProps> = ({
  name,
  options,
  localForm,
  ...props
}: SelectProps) => {
  const { register } = localForm;

  return (
    <ChakraSelect {...props} {...register(name)}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </ChakraSelect>
  );
};

export default Select;
