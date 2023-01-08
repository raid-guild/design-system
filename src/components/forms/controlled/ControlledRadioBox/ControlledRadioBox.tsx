/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  Box,
  useRadio,
  useRadioGroup,
  HStack,
  VStack,
  ChakraRadioProps,
  useStyleConfig,
} from '../../../chakra';

function RadioCard({ children, variant, ...props }: ChakraRadioProps) {
  const styles = useStyleConfig('RadioBox', { variant });
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
}

interface RadioBoxProps {
  name: string;
  value: string;
  updateRadio: (e: any) => void;
  options: any;
  stack: 'vertical' | 'horizontal';
}

function ControlledRadioBox({
  name,
  value,
  updateRadio,
  options,
  stack,
}: RadioBoxProps) {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    value,
    onChange: (e: any) => {
      updateRadio(e);
    },
  });

  const Options = () =>
    options.map((v: any) => {
      const radio = getRadioProps({ value: v });
      return (
        <RadioCard key={v} {...radio}>
          {v}
        </RadioCard>
      );
    });

  const group = getRootProps();

  return stack === 'vertical' ? (
    <VStack {...group} alignItems='inherit'>
      <Options />
    </VStack>
  ) : (
    <HStack {...group}>
      <Options />
    </HStack>
  );
}

export default ControlledRadioBox;
