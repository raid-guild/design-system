import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { ControlledNumberInput as NumberInput, Box, Stack } from '../../..';

export default {
  title: 'Components/Forms/NumberInput/Controlled',
  component: NumberInput,
} as Meta;

const stepConfig = { step: 1, min: 0, max: 10 };
const numberInputVariants = [
  { name: 'Outline', variant: 'outline', ...stepConfig },
  { name: 'Flushed', variant: 'flushed', ...stepConfig },
  { name: 'Filled', variant: 'filled', ...stepConfig },
];

const Controlled: StoryFn<typeof NumberInput> = () => (
  <Box m='15px'>
    <Stack spacing={4}>
      {numberInputVariants.map((input) => {
        return <NumberInput key={input.variant} {...input} />;
      })}
    </Stack>
  </Box>
);

export { Controlled };
