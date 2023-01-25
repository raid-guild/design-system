import React from 'react';
import { useForm } from 'react-hook-form';
import { Meta, StoryFn } from '@storybook/react';
import { Input as InputComponent, Box, Stack } from '../..';

export default {
  title: 'Components/Forms/Input/HookForm',
  component: InputComponent,
} as Meta;

const inputVariants = [
  { name: 'Outline', variant: 'outline' },
  { name: 'Flushed', variant: 'flushed' },
  { name: 'Filled', variant: 'filled' },
];

const HookForm: StoryFn<typeof InputComponent> = () => (
  <Box m='15px'>
    <Stack spacing={4}>
      {inputVariants.map((input) => {
        const localForm = useForm();

        return (
          <InputComponent
            key={input.name}
            label={`Input - ${input.name} Variant`}
            name='test'
            tooltip='This is a tooltip'
            helperText='This is a helper text'
            type='text'
            placeholder='Optional placeholder value'
            variant={input.variant}
            localForm={localForm}
          />
        );
      })}
    </Stack>
  </Box>
);

export { HookForm };
