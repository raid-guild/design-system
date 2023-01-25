import React from 'react';
import {
  ChakraStylesConfig,
  CreatableSelect as ReactCreatableSelect,
} from 'chakra-react-select';
import { FormLabel, Box, Stack } from '../../../chakra';

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
export interface ControlledCreatableSelectProps {
  label?: string | React.ReactNode;
  placeholder?: string;
  defaultValue?: Option | Option[];
  id?: string;
  options: Option[];
  isRequired?: boolean;
  isMulti?: boolean;
  isClearable?: boolean;
  onChange?: (option: Option) => void;
  isDisabled?: boolean;
  variant?: 'outline' | 'filled' | 'flushed' | undefined;
  basicStyles?: boolean;
  value?: any;
  isSearchable?: boolean;

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

const ControlledCreatableSelect: React.FC<ControlledCreatableSelectProps> = ({
  label,
  placeholder,
  defaultValue,
  options,
  isMulti,
  isClearable,
  onChange,
  isDisabled,
  value,
  variant,
  basicStyles = false,
  colorScheme = 'primary',
  isSearchable,
  ...props
}: ControlledCreatableSelectProps) => {
  const chakraStyles: ChakraStylesConfig = {
    dropdownIndicator: (provided) => ({
      ...provided,
      background: 'gray.600',
      p: 0,
      w: '40px',
    }),
  };

  return (
    <Stack spacing={2}>
      {label && <FormLabel>{label}</FormLabel>}
      <Box my={2}>
        <ReactCreatableSelect
          chakraStyles={basicStyles === false ? chakraStyles : {}}
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
          isSearchable={isSearchable}
          {...props}
        />
      </Box>
    </Stack>
  );
};

export default ControlledCreatableSelect;
