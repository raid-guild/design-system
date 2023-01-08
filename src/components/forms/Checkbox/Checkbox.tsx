import React, { ReactElement } from 'react';
import _ from 'lodash';
import { UseFormReturn, FieldValues, Controller } from 'react-hook-form';
import {
  ChakraCheckbox,
  ChakraCheckboxProps,
  Stack,
  FormControl,
} from '../../chakra';

export interface CustomCheckboxProps {
  options: string[];

  localForm: UseFormReturn<FieldValues>;
}

export type RadioProps = CustomCheckboxProps & ChakraCheckboxProps;

const Checkbox: React.FC<RadioProps> = ({
  options,
  size,
  localForm,
  ...props
}: RadioProps) => {
  const { control } = localForm;

  if (_.eq(_.size(options), 1)) {
    return (
      <FormControl>
        <Controller
          control={control}
          name={options[0]}
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
      <Stack spacing={3} direction='row'>
        {options.map(
          (option): ReactElement => (
            <Controller
              control={control}
              name={option}
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
