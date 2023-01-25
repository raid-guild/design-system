import React from 'react';
import { FieldValues, UseFormReturn, useController } from 'react-hook-form';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import {
  ChakraRadio,
  FormControl,
  FormLabel,
  ChakraRadioProps,
  Stack,
  useRadioGroup,
  FormHelperText,
  FormErrorMessage,
  Icon,
  HStack,
  Flex,
} from '../../chakra';
import { Tooltip } from '../../atoms';

// interface RadioOption {
//   label: string;
//   value: string; // seems like radio buttons want *only* strings for values
// }

export interface CustomRadioProps {
  name: string;
  label: string;
  options: string[];
  size?: string;
  isRequired?: boolean;
  localForm: UseFormReturn<FieldValues>;
  helperText?: string;
  tooltip?: string;
}

export type RadioProps = CustomRadioProps & ChakraRadioProps;

const Radio: React.FC<RadioProps> = ({
  name,
  label,
  options,
  size,
  isRequired,
  localForm,
  helperText,
  tooltip,
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
  const error = errors[name] && errors[name]?.message;

  const group = getRootProps();

  return (
    <FormControl isRequired={isRequired} isInvalid={!!errors[name]}>
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
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
        {typeof error === 'string' && (
          <FormErrorMessage>Error Message</FormErrorMessage>
        )}
      </Stack>
    </FormControl>
  );
};

export default Radio;
