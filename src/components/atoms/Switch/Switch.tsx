import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import {
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
 * Primary UI component for Heading
 */
const Switch: React.FC<SwitchProps> = ({ label, localForm, ...props }: any) => {
  const { register } = localForm;

  return (
    <Flex as={FormControl} align='center'>
      {label && (
        <ChakraText as={FormLabel} margin='0' marginRight='15px'>
          {label}
        </ChakraText>
      )}
      <ChakraSwitch {...props} {...register} />
    </Flex>
  );
};

export default Switch;
