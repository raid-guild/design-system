import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { Checkbox as CheckboxComponent, Box, Stack, Text } from '../..';

export default {
  title: 'Components/Forms/Checkbox/HookForm',
  component: CheckboxComponent,
} as Meta<typeof CheckboxComponent>;

const checkboxSizes = [
  { name: 'Small', size: 'sm' },
  { name: 'Medium', size: 'md' },
  { name: 'Large', size: 'lg' },
];

const checkboxOptions = ['1000', '10000'];

const HookForm: StoryFn<typeof CheckboxComponent> = () => (
  <Box w='50%'>
    <Stack spacing={5}>
      {checkboxSizes.map((size) => {
        const localForm = useForm();
        return (
          <Stack key={size.size}>
            <Text>{size.name}</Text>
            <CheckboxComponent
              name='testing'
              options={checkboxOptions}
              size={size.size}
              localForm={localForm}
            />
          </Stack>
        );
      })}
    </Stack>
  </Box>
);

export { HookForm };
