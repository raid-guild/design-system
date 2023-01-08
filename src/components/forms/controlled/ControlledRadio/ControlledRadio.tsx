import React from 'react';
import {
  ChakraRadio,
  ChakraRadioProps,
  Stack,
  useRadioGroup,
} from '../../../chakra';

export interface CustomRadioProps {
  options: string[];
  value: string;
  setValue: (value: string) => void;

  size?: string;
  direction?: 'row' | 'column';
}

export type ControlledRadioProps = CustomRadioProps & ChakraRadioProps;

const ControlledRadio: React.FC<ControlledRadioProps> = ({
  options,
  size,
  direction,
  value,
  setValue,
}) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    onChange: setValue,
    value,
  });

  const group = getRootProps();

  return (
    <Stack spacing={3} direction={direction || 'row'} {...group}>
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
  );
};

export default ControlledRadio;
