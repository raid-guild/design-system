/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  UseFormReturn,
  useController,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';
import { FaInfoCircle } from 'react-icons/fa';
import {
  Box,
  useRadio,
  useRadioGroup,
  HStack,
  VStack,
  ChakraRadioProps,
  useStyleConfig,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Stack,
  Icon,
} from '../../chakra';
import { Tooltip } from '../../atoms';

const RadioCard = ({ children, variant, size, ...props }: ChakraRadioProps) => {
  const styles = useStyleConfig('RadioBox', { variant, size });
  const { getInputProps, getCheckboxProps } = useRadio({ ...props });

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as='label'>
      <input {...input} />
      <Box {...checkbox} __css={styles}>
        {children}
      </Box>
    </Box>
  );
};

export interface CustomRadioBoxProps {
  name: string;
  helperText?: string;
  tooltip?: string;
  label: string | React.ReactNode;
  localForm: UseFormReturn<FieldValues>;
  options: string[];
  registerOptions?: RegisterOptions;
  stack?: 'vertical' | 'horizontal';
  size?: 'sm' | 'md' | 'lg';
}

type RadioBoxProps = CustomRadioBoxProps & ChakraRadioProps;

const Options = ({
  options,
  getRadioProps,
  size,
}: {
  options: string[];
  getRadioProps: any;
  size?: string;
}) => (
  <>
    {options.map((v: any) => {
      const radio = getRadioProps({ value: v });
      return (
        <RadioCard key={v} size={size} {...radio}>
          {v}
        </RadioCard>
      );
    })}
  </>
);

const RadioBox = ({
  name,
  label,
  localForm,
  registerOptions,
  options,
  stack,
  isRequired,
  size,
  helperText,
  tooltip,
}: RadioBoxProps) => {
  if (!localForm) return null;
  const { control } = localForm;
  const {
    field,
    formState: { errors },
  } = useController({
    control,
    name,
    rules: registerOptions,
  });
  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    onChange: field.onChange,
    value: field.value,
  });

  const group = getRootProps();
  const error = errors[name] && errors[name]?.message;

  return (
    <FormControl isRequired={isRequired} isInvalid={!!errors[name]} m={0}>
      <Stack>
        <HStack align='center'>
          {label && <FormLabel m='0'>{label}</FormLabel>}
          {tooltip && (
            <Tooltip
              label={tooltip}
              shouldWrapChildren
              hasArrow
              placement='end'
            >
              <Icon
                as={FaInfoCircle}
                boxSize={3}
                color='red.500'
                bg='white'
                borderRadius='full'
              />
            </Tooltip>
          )}
        </HStack>
        {stack === 'vertical' ? (
          <VStack {...group} alignItems='inherit'>
            <Options
              options={options}
              getRadioProps={getRadioProps}
              size={size}
            />
          </VStack>
        ) : (
          <HStack {...group}>
            <Options
              options={options}
              getRadioProps={getRadioProps}
              size={size}
            />
          </HStack>
        )}
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
        {typeof error === 'string' && (
          <FormErrorMessage>{error}</FormErrorMessage>
        )}
      </Stack>
    </FormControl>
  );
};

export default RadioBox;
