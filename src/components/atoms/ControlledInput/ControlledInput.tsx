import React from 'react';
import { ChakraInput, ChakraInputProps, FormLabel } from '../../chakra';

type CustomControlledInputProps = {
  label?: string; // optional, displays label if provided
  name?: string; // optional, not required since no form control
  tip?: string; // optional, displays tip if provided
  defaultValue?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

type ControlledInputProps = ChakraInputProps & CustomControlledInputProps;

const ControlledInput: React.FC<ControlledInputProps> = ({
  label,
  name,
  defaultValue,
  onChange,
  value,
  ...props
}: ControlledInputProps) => {
  return (
    <>
      {label && <FormLabel>{label}</FormLabel>}
      <ChakraInput
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
        value={value}
        {...props} // catches other ChakraInput props such as placeholder
      />
    </>
  );
};

export default ControlledInput;
