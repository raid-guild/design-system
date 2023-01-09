import React from 'react';
import { useForm } from 'react-hook-form';
import { Meta, StoryFn } from '@storybook/react';
import { NumberInput as NumberInputComponent, Box, Stack } from '../..';

export default {
  title: 'Components/Forms/NumberInput/HookForm',
  component: NumberInputComponent,
} as Meta;

const numberInputVariants = [
  { name: 'Outline', variant: 'outline' },
  { name: 'Flushed', variant: 'flushed' },
  { name: 'Filled', variant: 'filled' },
];

const HookForm: StoryFn<typeof NumberInputComponent> = () => (
  <Box m='15px'>
    <Stack spacing={4}>
      {numberInputVariants.map((input) => {
        const localForm = useForm();

        return (
          // <form onSubmit={handleSubmit} key={input.variant}>
          <NumberInputComponent
            key={input.variant}
            label={`Input - ${input.name} Variant`}
            name='test'
            type='text'
            variant={input.variant}
            localForm={localForm}
          />
          // </form>
        );
      })}
    </Stack>
  </Box>
);

export { HookForm };
