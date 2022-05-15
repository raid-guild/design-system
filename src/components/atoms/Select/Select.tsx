import React from 'react';
import { FieldHookConfig, useField } from 'formik';
import { ChakraSelect, ChakraSelectProps } from '../../chakra';

interface SelectOption {
  label: string;
  value: any;
}

interface CustomSelectProps {
  name: string;
  options: SelectOption[];
}

export type SelectProps = CustomSelectProps &
  ChakraSelectProps &
  FieldHookConfig<'select'>;

const Select: React.FC<SelectProps> = ({
  name,
  options,
  ...props
}: SelectProps) => {
  const [field] = useField(name);

  return (
    <>
      {/* @ts-ignore next-line */}
      <ChakraSelect {...props} {...field}>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </ChakraSelect>
    </>
  );
};

export default Select;
