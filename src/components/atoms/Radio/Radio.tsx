import React, { useState } from 'react';
import { ChakraRadio, RadioGroup, ChakraRadioProps, Stack } from '../../chakra';

interface RadioOption {
  label: string;
  value: string; // seems like radio buttons want *only* strings for values
}

interface CustomRadioProps {
  size?: string;
  defaultValue: string;
  options: RadioOption[];
}

export type RadioProps = CustomRadioProps & ChakraRadioProps;

const Radio: React.FC<RadioProps> = ({
  options,
  defaultValue,
  size,
  ...props
}: RadioProps) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <RadioGroup value={value} onChange={setValue}>
      <Stack spacing={3} direction='row'>
        {options.map((radioOption) => (
          <ChakraRadio
            value={radioOption.value}
            size={size}
            key={radioOption.value}
            {...props}
          >
            {radioOption.label}
          </ChakraRadio>
        ))}
      </Stack>
    </RadioGroup>
  );
};

export default Radio;
