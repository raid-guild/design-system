import React from 'react';
import _ from 'lodash';
import {
  ChakraCheckbox,
  CheckboxGroup,
  ChakraCheckboxProps,
  Stack,
} from '../../chakra';

interface CheckboxOption {
  label: string;
  value: string; // seems like checkboxes want *only* strings for values
}

interface CustomCheckboxProps {
  size?: string;
  defaultValue: string[];
  options: CheckboxOption[];
}

export type RadioProps = CustomCheckboxProps & ChakraCheckboxProps;

const Checkbox: React.FC<RadioProps> = ({
  options,
  defaultValue,
  size,
  ...props
}: RadioProps) => {
  if (_.eq(_.size(options), 1)) {
    return (
      <ChakraCheckbox
        value={options[0].value}
        size={size}
        key={options[0].value}
        {...props}
      >
        {options[0].label}
      </ChakraCheckbox>
    );
  }

  return (
    <CheckboxGroup defaultValue={defaultValue}>
      <Stack spacing={3} direction='row'>
        {options.map((checkboxOption) => (
          <ChakraCheckbox
            value={checkboxOption.value}
            size={size}
            key={checkboxOption.value}
            {...props}
          >
            {checkboxOption.label}
          </ChakraCheckbox>
        ))}
      </Stack>
    </CheckboxGroup>
  );
};

export default Checkbox;
