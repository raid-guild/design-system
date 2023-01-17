import React, { ReactElement } from 'react';
import _ from 'lodash';
import { UseFormReturn, FieldValues, Controller } from 'react-hook-form';
import {
  ChakraCheckbox,
  ChakraCheckboxProps,
  Stack,
  FormLabel,
  FormControl,
} from '../../chakra';

export interface CustomCheckboxProps {
  name?: string;
  label?: string | React.ReactNode;
  options: string[];
  direction?: 'row' | 'column';
  localForm: UseFormReturn<FieldValues>;
}

export type RadioProps = CustomCheckboxProps & ChakraCheckboxProps;

const Checkbox: React.FC<RadioProps> = ({
  name,
  label,
  options,
  size,
  direction,
  localForm,
  ...props
}: RadioProps) => {
  const { control } = localForm;

  if (_.eq(_.size(options), 1)) {
    return (
      <FormControl>
        {label && <FormLabel>{label}</FormLabel>}
        <Controller
          control={control}
          name={name || options[0]}
          key={options[0]}
          defaultValue={false}
          render={({ field: { onChange, value, ref } }) => (
            <ChakraCheckbox
              onChange={onChange}
              textTransform='capitalize'
              ref={ref}
              isChecked={value}
              size={size}
              {...props}
            >
              {options[0]}
            </ChakraCheckbox>
          )}
        />
      </FormControl>
    );
  }

  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      <Stack spacing={3} direction={direction || 'row'}>
        {options.map(
          (option): ReactElement => (
            <Controller
              control={control}
              name={name || option}
              key={option}
              defaultValue={false}
              render={({ field: { onChange, value, ref } }) => (
                <ChakraCheckbox
                  onChange={onChange}
                  textTransform='capitalize'
                  ref={ref}
                  isChecked={value}
                  size={size}
                  {...props}
                >
                  {option}
                </ChakraCheckbox>
              )}
            />
          )
        )}
      </Stack>
    </FormControl>
  );
};

export default Checkbox;
