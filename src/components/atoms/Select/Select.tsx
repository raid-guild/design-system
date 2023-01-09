import React from 'react';
import { UseFormReturn, Controller } from 'react-hook-form';
import { ChakraStylesConfig, Select as ReactSelect } from 'chakra-react-select';
import { FormLabel, FormControl, Box, Stack } from '../../chakra';

export type Option =
  | {
      label: string | number;
      value: string | number;
    }
  | { value: number | null; label: string }
  | { value: number; label: string | null | undefined }
  | { value: null; label: string }
  | { label: string | number; value: string | number }
  | { value: number; label: string };
export interface SelectProps {
  name: string;
  label?: string;
  placeholder?: string;
  defaultValue?: Option | Option[];
  id?: string;
  options: Option[];
  isRequired?: boolean;
  localForm: Pick<UseFormReturn, 'control' | 'formState'>;
  isMulti?: boolean;
  isClearable?: boolean;
  onChange?: (option: Option) => void;
  isDisabled?: boolean;
  variant?: 'outline' | 'filled' | 'flushed' | undefined;
  basicStyles?: boolean;
  value?: any;
  colorScheme?:
    | 'whiteAlpha'
    | 'blackAlpha'
    | 'gray'
    | 'red'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'teal'
    | 'blue'
    | 'cyan'
    | 'purple'
    | 'pink'
    | 'linkedin'
    | 'facebook'
    | 'messenger'
    | 'whatsapp'
    | 'twitter'
    | 'telegram'
    | 'primary';
}

const Select: React.FC<SelectProps> = ({
  label,
  name,
  placeholder,
  defaultValue,
  options,
  isMulti,
  isClearable,
  onChange,
  isDisabled,
  value,
  variant,
  localForm,
  basicStyles = false,
  colorScheme = 'primary',
  ...props
}: SelectProps) => {
  const { control } = localForm;

  const chakraStyles: ChakraStylesConfig = {
    dropdownIndicator: (provided) => ({
      ...provided,
      background: 'gray.600',
      p: 0,
      w: '40px',
    }),
  };

  return (
    <FormControl mb={4}>
      <Stack spacing={2}>
        {label && <FormLabel>{label}</FormLabel>}
        <Box my={2}>
          <Controller
            name={name}
            control={control}
            shouldUnregister={false}
            render={({ field }) => (
              <ReactSelect
                {...field}
                chakraStyles={basicStyles === false ? chakraStyles : {}}
                onBlur={field.onBlur}
                options={options}
                defaultValue={defaultValue}
                placeholder={placeholder}
                isClearable={isClearable}
                isMulti={isMulti}
                onChange={onChange}
                isDisabled={isDisabled}
                variant={variant}
                colorScheme={colorScheme}
                value={value}
                useBasicStyles={basicStyles}
                {...props}
              />
            )}
          />
        </Box>
      </Stack>
    </FormControl>
  );
};

export default Select;
