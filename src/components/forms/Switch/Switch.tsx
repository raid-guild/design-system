import React from 'react';
import { UseFormReturn } from 'react-hook-form';
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
  label: string;
  localForm: UseFormReturn;
};

export type SwitchProps = ChakraSwitchProps & CustomSwitchProps;

/**
 * React Hook Form implementation for Switch
 */
const Switch: React.FC<SwitchProps> = ({
  label,
  localForm,
  ...props
}: SwitchProps) => {
  const { register } = localForm;

  return (
    <Flex as={FormControl} align='center'>
      <HStack spacing={3}>
        {label && <ChakraText as={FormLabel}>{label}</ChakraText>}
        <ChakraSwitch {...props} {...register} />
      </HStack>
    </Flex>
  );
};

export default Switch;
