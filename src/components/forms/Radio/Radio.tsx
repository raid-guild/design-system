import React from 'react';
import { FieldValues, UseFormReturn, useController } from 'react-hook-form';
import {
  ChakraRadio,
  FormControl,
  FormLabel,
  ChakraRadioProps,
  Stack,
  useRadioGroup,
} from '../../chakra';

// interface RadioOption {
//   label: string;
//   value: string; // seems like radio buttons want *only* strings for values
// }

export interface CustomRadioProps {
  name: string;
  label: string | React.ReactNode;
  options: string[];
  size?: string;
  isRequired?: boolean;
  localForm: UseFormReturn<FieldValues>;
}

export type RadioProps = CustomRadioProps & ChakraRadioProps;

const Radio: React.FC<RadioProps> = ({
  name,
  label,
  options,
  size,
  isRequired,
  localForm,
}: // ...props
RadioProps) => {
  const { control } = localForm;
  const {
    field,
    formState: { errors },
  } = useController({
    control,
    name,
    // rules: { required: { value: true, message: "Required field" } }
  });
  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    onChange: field.onChange,
    value: field.value,
  });

  const group = getRootProps();

  return (
    <FormControl isRequired={isRequired} isInvalid={!!errors[name]}>
      {label && <FormLabel>{label}</FormLabel>}
      <Stack spacing={3} direction='row' {...group}>
        {options.map((radioOption) => {
          const radio = getRadioProps({ value: radioOption });
          return (
            <ChakraRadio
              value={radioOption}
              size={size}
              key={radioOption}
              {...radio}
            >
              {radioOption}
            </ChakraRadio>
          );
        })}
      </Stack>
    </FormControl>
  );
};

export default Radio;
