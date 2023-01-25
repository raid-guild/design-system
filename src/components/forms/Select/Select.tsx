import React from 'react';
import { UseFormReturn, Controller } from 'react-hook-form';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { ChakraStylesConfig, Select as ReactSelect } from 'chakra-react-select';
import {
  FormLabel,
  FormControl,
  Box,
  Stack,
  FormHelperText,
  FormErrorMessage,
  Icon,
  HStack,
  Flex,
} from '../../chakra';
import { Tooltip } from '../../atoms';

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
  helperText?: string;
  tooltip?: string;
  label?: string | React.ReactNode;
  placeholder?: string;
  defaultValue?: Option | Option[];
  id?: string;
  options: Option[];
  isRequired?: boolean;
  localForm: Pick<UseFormReturn, 'control' | 'formState'>;
  isMulti?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
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
  helperText,
  tooltip,
  placeholder,
  defaultValue,
  options,
  isMulti,
  isClearable,
  isSearchable,
  isDisabled,
  variant,
  localForm,
  basicStyles = false,
  colorScheme = 'primary',
  ...props
}: SelectProps) => {
  const {
    control,
    formState: { errors },
  } = localForm;

  const error = errors[name] && errors[name]?.message;

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
        <HStack align='center'>
          {label && <FormLabel m='0'>{label}</FormLabel>}
          {tooltip && (
            <Tooltip
              label={tooltip}
              shouldWrapChildren
              hasArrow
              placement='end'
            >
              <Flex
                h='24px'
                w='24px'
                bg='primary.500'
                borderRadius='full'
                align='center'
                justify='center'
              >
                <Icon as={AiOutlineInfoCircle} w='12px' h='12px' />
              </Flex>
            </Tooltip>
          )}
        </HStack>

        <Box my={2}>
          <Controller
            name={name}
            control={control}
            shouldUnregister={false}
            render={({ field }) => (
              <ReactSelect
                chakraStyles={basicStyles === false ? chakraStyles : {}}
                options={options}
                defaultValue={defaultValue}
                placeholder={placeholder}
                isClearable={isClearable}
                isMulti={isMulti}
                isDisabled={isDisabled}
                variant={variant}
                colorScheme={colorScheme}
                useBasicStyles={basicStyles}
                isSearchable={isSearchable}
                {...field}
                {...props}
              />
            )}
          />
        </Box>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
        {typeof error === 'string' && (
          <FormErrorMessage>Error Message</FormErrorMessage>
        )}
      </Stack>
    </FormControl>
  );
};

export default Select;
