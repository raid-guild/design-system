import React from 'react';
import type { StoryFn } from '@storybook/react';
import { ControlledNumberInput as NumberInput, Box, Stack } from '../../..';

export default {
  title: 'Components/Forms/NumberInput/Controlled',
  component: NumberInput,
}; // as Meta;

const stepConfig = { step: 1, min: 0, max: 10 };
const numberInputVariants = [
  { name: 'Outline', variant: 'outline', ...stepConfig },
  { name: 'Flushed', variant: 'flushed', ...stepConfig },
  { name: 'Filled', variant: 'filled', ...stepConfig },
  { name: 'Solid Outline', variant: 'solidOutline', ...stepConfig },
];

const Controlled: StoryFn<typeof NumberInput> = () => (
  <Box m='15px'>
    <Stack>
      {numberInputVariants.map((input) => {
        return (
          <NumberInput
            key={input.variant}
            label={`Input - ${input.name} Variant`}
            {...input}
          />
        );
      })}
    </Stack>
  </Box>
);

export { Controlled };
