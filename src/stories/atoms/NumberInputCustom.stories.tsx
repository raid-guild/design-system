import React from 'react';
import { useForm } from 'react-hook-form';
import { Meta, StoryFn } from '@storybook/react';
import { NumberInput, Box, Stack } from '../..';

export default {
  title: 'Components/Atoms/NumberInput',
  component: NumberInputComponent,
} as Meta;

const numberInputVariants = [
  { name: 'Outline', variant: 'outline' },
  { name: 'Flushed', variant: 'flushed' },
  { name: 'Filled', variant: 'filled' },
];

const NumberInput: StoryFn<typeof NumberInputComponent> = () => {
  const localForm = useForm();

  return (
    <Box m='15px'>
      <Stack spacing={4}>
        {numberInputVariants.map((NumberInput) => (
          // <form onSubmit={handleSubmit} key={input.variant}>
          <NumberInput
            label={`Input - ${NumberInput.name} Variant`}
            name='test'
            type='text'
            variant={NumberInput.variant}
            localForm={localForm}
          />
          // </form>
        ))}
      </Stack>
    </Box>
  );
};

export { NumberInput };
