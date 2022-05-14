import React from 'react';
// import { FieldHookConfig, useField } from 'formik';
import {
  ChakraSwitch,
  // ChakraInputProps,
  Flex,
  ChakraText,
  FormControl,
  FormLabel,
} from '../../chakra';

// type CustomInputProps = {
//   label: string;
// };

// type InputProps = ChakraInputProps &
//   CustomInputProps &
//   FieldHookConfig<'input'>;

/**
 * Primary UI component for Heading
 */
const Switch: React.FC<any> = ({ label, ...props }: any) => {
  return (
    <Flex as={FormControl} align='center'>
      {label && (
        <ChakraText as={FormLabel} margin='0' marginRight='15px'>
          {label}
        </ChakraText>
      )}
      <ChakraSwitch {...props} />
    </Flex>
  );
};

export default Switch;
