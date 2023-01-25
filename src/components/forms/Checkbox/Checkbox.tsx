import React, { ReactElement } from 'react';
import _ from 'lodash';
import { UseFormReturn, FieldValues, Controller } from 'react-hook-form';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import {
  ChakraCheckbox,
  ChakraCheckboxProps,
  Stack,
  FormLabel,
  FormControl,
  FormHelperText,
  FormErrorMessage,
  Icon,
  HStack,
  Flex,
} from '../../chakra';
import { Tooltip } from '../../atoms';

export interface CustomCheckboxProps {
  name?: string;
  label?: string | React.ReactNode;
  options: string[];
  direction?: 'row' | 'column';
  localForm: UseFormReturn<FieldValues>;
  helperText?: string;
  tooltip?: string;
}

export type RadioProps = CustomCheckboxProps & ChakraCheckboxProps;

const Checkbox: React.FC<RadioProps> = ({
  name,
  label,
  options,
  size,
  direction,
  localForm,
  helperText,
  tooltip,
  ...props
}: RadioProps) => {
  const {
    control,
    formState: { errors },
  } = localForm;

  const error = name && errors[name] && errors[name]?.message;

  if (_.eq(_.size(options), 1)) {
    return (
      <FormControl>
        <Stack spacing={4}>
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
          {helperText && <FormHelperText>{helperText}</FormHelperText>}
          {typeof error === 'string' && (
            <FormErrorMessage>Error Message</FormErrorMessage>
          )}
        </Stack>
      </FormControl>
    );
  }

  return (
    <FormControl>
      <Stack spacing={4}>
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
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
        {typeof error === 'string' && (
          <FormErrorMessage>Error Message</FormErrorMessage>
        )}
      </Stack>
    </FormControl>
  );
};

export default Checkbox;
