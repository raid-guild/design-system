import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { Radio as RadioComponent, Box, Stack, Text } from '../..';

export default {
  title: 'Components/Forms/Radio/HookForm',
  component: RadioComponent,
} as Meta<typeof RadioComponent>;

const radioSizes = [
  { name: 'Small', size: 'sm' },
  { name: 'Medium', size: 'md' },
  { name: 'Large', size: 'lg' },
];

const radioOptions = ['1000', '10000'];

const HookForm: StoryFn<typeof RadioComponent> = () => (
  <Box w='50%'>
    <Stack spacing={5}>
      {radioSizes.map((size) => {
        const localForm = useForm();

        return (
          <Stack key={size.size}>
            <Text>{size.name}</Text>
            <RadioComponent
              name='testing'
              label='Select your budget'
              options={radioOptions}
              defaultValue='1000'
              localForm={localForm}
              size={size.size}
            />
          </Stack>
        );
      })}
    </Stack>
  </Box>
);

export { HookForm };
