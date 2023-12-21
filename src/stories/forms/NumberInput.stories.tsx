import React from 'react';
import { useForm } from 'react-hook-form';
import { StoryFn } from '@storybook/react';
import { NumberInput as NumberInputComponent, Box, Stack } from '../..';

export default {
  title: 'Components/Forms/NumberInput/HookForm',
  component: NumberInputComponent,
} as any; // as Meta;

const stepConfig = { step: 1, min: 0, max: 10 };
const numberInputVariants = [
  { name: 'Outline', variant: 'outline', ...stepConfig },
  { name: 'Flushed', variant: 'flushed', ...stepConfig },
  { name: 'Filled', variant: 'filled', ...stepConfig },
];

const HookForm: StoryFn<typeof NumberInputComponent> = () => (
  <Box m='15px'>
    <Stack spacing={4}>
      {numberInputVariants.map((input) => {
        const localForm = useForm();

        return (
          <NumberInputComponent
            key={input.variant}
            label={`Input - ${input.name} Variant`}
            localForm={localForm}
            {...input}
          />
        );
      })}
    </Stack>
  </Box>
);

export { HookForm };
