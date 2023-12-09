import React from 'react';
import {
  Controller,
  FieldValues,
  RegisterOptions,
  UseFormReturn,
} from 'react-hook-form';
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  localForm: UseFormReturn<any>;
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
  const { control } = localForm;

  return (
    <Flex as={FormControl} align='center'>
      <Controller
        control={control}
        name={name}
        rules={registerOptions}
        render={({ field: { onBlur, onChange, value } }) => (
          <HStack spacing={3}>
            {label && <ChakraText as={FormLabel}>{label}</ChakraText>}
            <ChakraSwitch
              {...props}
              onChange={(e) => onChange(e.target.checked)}
              onBlur={onBlur}
              isChecked={value}
            />
          </HStack>
        )}
      />
    </Flex>
  );
};

export default Switch;
