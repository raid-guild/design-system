import React from 'react';
import { useForm } from 'react-hook-form';
import { Meta, StoryFn } from '@storybook/react';
import { Input as InputComponent, Box, Stack } from '../..';

export default {
  title: 'Components/Atoms/Input',
  component: InputComponent,
} as Meta;

const inputVariants = [
  { name: 'Outline', variant: 'outline' },
  { name: 'Flushed', variant: 'flushed' },
  { name: 'Filled', variant: 'filled' },
];

const Input: StoryFn<typeof InputComponent> = () => {
  const localForm = useForm();

  return (
    <Box m='15px'>
      <Stack spacing={4}>
        {inputVariants.map((input) => (
          // <form onSubmit={handleSubmit} key={input.variant}>
          <InputComponent
            label={`Input - ${input.name} Variant`}
            name='test'
            type='text'
            variant={input.variant}
            localForm={localForm}
          />
          // </form>
        ))}
      </Stack>
    </Box>
  );
};

export { Input };
