import React from 'react';
import { FieldValues, RegisterOptions, UseFormReturn } from 'react-hook-form';
import {
  HStack,
  ChakraSwitch,
  ChakraSwitchProps,
  Flex,
  ChakraText,
  FormControl,
  FormLabel,
} from '../../chakra';

type CustomSwitchProps = {
  label: string | React.ReactNode;
  name: string;
  registerOptions?: RegisterOptions<FieldValues, string> | undefined;
  localForm: UseFormReturn<FieldValues>;
};

export type SwitchProps = ChakraSwitchProps & CustomSwitchProps;

/**
 * React Hook Form implementation for Switch
 */
const Switch: React.FC<SwitchProps> = ({
  label,
  name,
  registerOptions,
  localForm,
  ...props
}: SwitchProps) => {
  const { register } = localForm;

  return (
    <Flex as={FormControl} align='center'>
      <HStack spacing={3}>
        {label && <ChakraText as={FormLabel}>{label}</ChakraText>}
        <ChakraSwitch {...props} {...register(name, registerOptions)} />
      </HStack>
    </Flex>
  );
};

export default Switch;
